import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
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
} from 'firebase/auth';

import { axiosDefaultInstance } from 'utils/axiosConfig';

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
  sessionPersisted: boolean;
  setSessionPesisted: Dispatch<SetStateAction<boolean>>;
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

type VerificationResponse = {
  status: string;
  user: UserInfo | null;
};

type CsrfResponse = {
  csrfToken: string;
};

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
  const [user, setUser] = useState<UserInfo | null>(null);
  const [csrfToken, setCsrfToken] = useState<string>('');
  const [sessionPersisted, setSessionPersisted] = useState<boolean>(false);
  const auth = getAuth();
  auth.setPersistence(inMemoryPersistence);

  // retrieve csrf token on the first visit
  const getCsrfToken = async () => {
    try {
      const res = await axiosDefaultInstance.get<CsrfResponse>('/auth', {
        withCredentials: true,
      });
      if (res.status == 200) {
        const { data } = await res;
        await setCsrfToken(data.csrfToken);
      }
      return;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  // signs in to firebase auth, then requests backend to create session cookie
  const signIn = async (email: string, password: string) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredentials.user.getIdToken();
      const res = await axiosDefaultInstance.post<VerificationResponse>(
        '/auth/login',
        { idToken: idToken },
        { headers: { 'X-CSRF-Token': csrfToken }, withCredentials: true }
      );
      if (res.status == 200) {
        const { data } = await res;
        await setUser(data.user);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signUp = async (email: string, password: string, username: string) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredentials.user, {
        displayName: username,
      });
      const res = await signIn(email, password);
      return res;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      const res = await axiosDefaultInstance.post(
        '/auth/logout',
        {},
        { headers: { 'X-CSRF-Token': csrfToken }, withCredentials: true }
      );
      if (res.status == 200) {
        await setUser(null);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // verifies user session token from the cookie and sets user for auth context
  // should be used in the middleware before redirect to private pages
  const verifyUser = async () => {
    try {
      const res = await axiosDefaultInstance.post<VerificationResponse>(
        '/auth/verify',
        {},
        { headers: { 'X-CSRF-Token': csrfToken }, withCredentials: true }
      );
      if (res.status == 200) {
        const { data } = await res;
        await setUser(data.user);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser as UserInfo);
      } else {
        setUser(null);
      }
    });

    const subscribe = async () => {
      if (!csrfToken) {
        await getCsrfToken();
        return;
      } else {
        const res = await verifyUser();
        if (res) {
          console.log('signed in from previous session');
          setSessionPersisted(true);
        } else {
          console.log('not logged in');
        }
      }
    };

    subscribe();

    return () => unsubscribe();
  }, [csrfToken]);

  const authState: AuthState = {
    user: user,
    csrfToken: csrfToken,
    sessionPersisted: sessionPersisted,
    setSessionPesisted: setSessionPersisted,
    getCsrfToken: getCsrfToken,
    logIn: signIn,
    createUser: signUp,
    logOut: logOut,
    verifyUser: verifyUser,
  };

  return authState;
};
