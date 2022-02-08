import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as firebase from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  inMemoryPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserInfo,
  UserCredential,
} from 'firebase/auth';

import { VerificationResponse, CsrfResponse } from 'types';

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
  user: UserInfo | null;
  csrfToken: string;
  getCsrfToken: () => Promise<void>;
  logIn: (email: string, password: string) => Promise<boolean>;
  createUser: (
    email: string,
    password: string,
    username: string
  ) => Promise<boolean>;
  logOut: () => Promise<boolean>;
  verifyUser: () => Promise<boolean>;
};

// type VerificationResponse = {
//   status: string;
//   user: UserInfo | null;
// };

// type CSRFResponse = {
//   csrfToken: string;
// };

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

const authContext = createContext({} as AuthState);

export const AuthProvider: FC = ({ children }) => {
  const authState: AuthState = useProvideAuth();

  useEffect(() => {
    authState.getCsrfToken();
  }, []);
  return (
    <authContext.Provider value={authState}>{children}</authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [csrfToken, setCsrfToken] = useState<string>('');
  const auth = getAuth();
  auth.setPersistence(inMemoryPersistence);

  // retrieve csrf token on the first visit
  const getCsrfToken = () => {
    return new Promise<void>((resolve, reject) => {
      fetch('http://localhost:8000/auth', {
        method: 'GET',
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data: CsrfResponse) => {
          setCsrfToken(data.csrfToken);
          resolve();
        })
        .catch((error) => reject(error));
    });
  };

  // signs in to firebase auth, then requests backend to create session cookie
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials: UserCredential) => {
        const idToken = await userCredentials.user.getIdToken();
        const res = await fetch('http://localhost:8000/auth/login', {
          method: 'POST',
          body: JSON.stringify({ idToken: idToken }),
          credentials: 'include',
          headers: {
            'X-CSRF-Token': csrfToken,
          },
        });
        if (res.ok) {
          const data: VerificationResponse = await res.json();
          await setUser(data.user as UserInfo);
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };

  const signUp = (email: string, password: string, username: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials: UserCredential) => {
        updateProfile(userCredentials.user, {
          displayName: username,
        });
        try {
          const res = await signIn(email, password);
          return res;
        } catch (error) {
          console.error(error);
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };

  const logOut = () => {
    return signOut(auth)
      .then(async () => {
        const res = await fetch('http://localhost:8000/auth/logout', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'X-CSRF-Token': csrfToken,
          },
        });
        if (res.ok) {
          setUser(null);
          return res.ok;
        }
        return false;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };

  // verifies user session token from the cookie and sets user for auth context
  // should be used in the middleware before redirect to private pages
  const verifyUser = () => {
    return new Promise<boolean>((resolve, reject) => {
      // try {
      fetch('http://localhost:8000/auth/verify', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      })
        .then((res) => res.json())
        .then((data: VerificationResponse) => {
          if (data.user) {
            setUser(data.user);
            resolve(true);
          }
          resolve(false);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser as UserInfo);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  });

  const authState: AuthState = {
    user: user,
    csrfToken: csrfToken,
    getCsrfToken: getCsrfToken,
    logIn: signIn,
    createUser: signUp,
    logOut: logOut,
    verifyUser: verifyUser,
  };

  return authState;
};
