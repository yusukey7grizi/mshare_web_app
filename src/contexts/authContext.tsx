import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth'
import { NextRouter, useRouter } from 'next/router'
import Cookies from 'js-cookie'

const firebaseConfig = {
  apiKey: 'AIzaSyC_N3NsHmcxdR17UOvtezZurnDDaxVhpTE',
  authDomain: 'mshare-authentication.firebaseapp.com',
  projectId: 'mshare-authentication',
  storageBucket: 'mshare-authentication.appspot.com',
  messagingSenderId: '786116129507',
  appId: '1:786116129507:web:f6f88b477b63a64012cbd6',
  measurementId: 'G-0CXZSTY13R',
}

type AuthState = {
  user: User | null
  logIn: (email: string, password: string) => Promise<void | User>
  createUser: (
    email: string,
    password: string,
    username: string,
  ) => Promise<void | User>
  logOut: () => Promise<void>
}

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig)
}

const authContext = createContext({} as AuthState)

export const AuthProvider: FC = ({ children }) => {
  const authState: AuthState = useProvideAuth()
  return (
    <authContext.Provider value={authState}>{children}</authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

const useProvideAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const auth = getAuth()

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials: UserCredential) => {
        setUser(userCredentials.user)
        Cookies.set('uid', userCredentials.user.uid)
        return userCredentials.user
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const signUp = (email: string, password: string, username: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials: UserCredential) => {
        updateProfile(userCredentials.user, {
          displayName: username,
        })
        setUser(userCredentials.user)
        Cookies.set('uid', userCredentials.user.uid)
        return userCredentials.user
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        Cookies.remove('uid')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        Cookies.set('uid', currentUser.uid)
      } else {
        setUser(null)
        Cookies.remove('uid')
      }
    })

    return () => unsubscribe()
  })
  const authState: AuthState = {
    user: user,
    logIn: signIn,
    createUser: signUp,
    logOut: logOut,
  }

  return authState
}
