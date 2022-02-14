import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as firebase from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  inMemoryPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserInfo,
} from 'firebase/auth';

import { axiosDefaultInstance } from 'utils/axiosConfig';
import { useRouter } from 'next/router';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASSUMENT_ID,
};

const ProtectedPaths = ['/profile', '/movie/post'];
const AuthPaths = ['/auth/login', '/auth/register'];

type AuthState = {
  user: UserInfo | null;
  csrfToken: string;
  isProcessing: boolean;
  redirectUrl: string;
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
  user: AdminSdkUserInfo | null;
};

type AdminSdkUserInfo = {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoUrl: string;
  providerId: string;
  rawId: string;
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
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [redirectUrl, setRedirectUrl] = useState<string>('');
  const auth = getAuth();
  auth.setPersistence(inMemoryPersistence);
  const router = useRouter();
  const { asPath } = router;

  // retrieve csrf token on the first visit
  const getCsrfToken = async () => {
    try {
      const res = await axiosDefaultInstance.get<CsrfResponse>('/auth', {
        withCredentials: true,
      });
      if (res.status == 200) {
        const { csrfToken } = await res.data;
        await setCsrfToken(csrfToken);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return true;
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
        const { user } = await res.data;
        if (user) {
          await setUser({ uid: user?.rawId, photoURL: user.photoUrl, ...user });
        }
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
        const { user } = await res.data;
        if (user) {
          await setUser({ uid: user?.rawId, photoURL: user.photoUrl, ...user });
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const secondCall = useRef(false);

  useEffect(() => {
    const subscribe = async () => {
      if (!csrfToken) {
        // first useEffect call after refresh
        await getCsrfToken();
        secondCall.current = await true;
      } else if (
        !AuthPaths.includes(asPath) &&
        secondCall.current &&
        !ProtectedPaths.includes(asPath)
      ) {
        // second useEffect call after refresh
        await verifyUser();
        secondCall.current = await false;
      } else if (ProtectedPaths.includes(asPath)) {
        // all path change to protectected paths
        const res = await verifyUser();
        if (await res) {
          await setIsProcessing(false);
        } else {
          await setRedirectUrl(asPath);
          await router.push('/auth/login');
        }
      }
    };

    subscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [csrfToken, asPath]);

  const authState: AuthState = {
    user: user,
    csrfToken: csrfToken,
    isProcessing: isProcessing,
    redirectUrl: redirectUrl,
    logIn: signIn,
    createUser: signUp,
    logOut: logOut,
    verifyUser: verifyUser,
  };

  return authState;
};
