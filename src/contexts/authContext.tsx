import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth';
import Cookies from 'js-cookie';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASSUMENT_ID,
};

type AuthState = {
  user: User | null
  logIn: (email: string, password: string) => Promise<boolean>
  createUser: (
    email: string,
    password: string,
    username: string
  ) => Promise<boolean>
  logOut: () => Promise<boolean>
  verifyUser: () => Promise<boolean>
}

type VerificationResponse = {
  status: boolean
  user: User | null
}

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

const authContext = createContext({} as AuthState);

export const AuthProvider: FC = ({ children }) => {
  const authState: AuthState = useProvideAuth();
  return (
    <authContext.Provider value={authState}>{children}</authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  // signs in to firebase auth, then requests backend to create session cookie
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials: UserCredential) => {
        const idToken = userCredentials.user.getIdToken()
        const res = await fetch('http://localhost:8000/auth/login', {
          method: 'POST',
          body: JSON.stringify({ id: idToken }),
        })
        if (res.ok) {
          const data: VerificationResponse = await res.json()
          if (data.status) await setUser(data.user)
          return data.status
        } else {
          return false
        }
      })
      .catch((error) => {
        console.error(error)
        return false
      })
  }

  const signUp = (email: string, password: string, username: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials: UserCredential) => {
        updateProfile(userCredentials.user, {
          displayName: username,
        })
        try {
          const res = await signIn(email, password)
          return res
        } catch (error) {
          console.error(error)
          return false
        }
      })
      .catch((error) => {
        console.error(error)
        return false
      })
  }

  const logOut = () => {
    return signOut(auth)
      .then(async () => {
        const res = await fetch('http://localhost:8000/auth/logout', {
          method: 'POST',
        })
        return res.ok
      })
      .catch((error) => {
        console.error(error)
        return false
      })
  }

  // verifies user session token from the cookie and sets user for auth context
  // should be used in the middleware before redirect to private pages
  const verifyUser = () => {
    return new Promise<boolean>(async () => {
      try {
        const res = await fetch('http://localhost:8000/auth/verify', {
          method: 'POST',
        })
        if (res.ok) {
          const data: VerificationResponse = await res.json()
          if (data.status) await setUser(data.user)
          return data.status
        }
      } catch (error) {
        console.error(error)
      }
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        Cookies.set('uid', currentUser.uid);
      } else {
        setUser(null);
        Cookies.remove('uid');
      }
    });

    return () => unsubscribe();
  });

  const authState: AuthState = {
    user: user,
    logIn: signIn,
    createUser: signUp,
    logOut: logOut,
    verifyUser: verifyUser,
  }

  return authState;
};
