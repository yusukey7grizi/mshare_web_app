import React, { createContext, useState, FC } from 'react'
import { CreateMovieInput, CreateUserInput, LogInUserInput } from 'types'

type AppState = {
  createMovieInput: CreateMovieInput
  setCreateMovieInput: (input: CreateMovieInput) => void
  createUserInput: CreateUserInput
  setCreateUserInput: (input: CreateUserInput) => void
  logInUserInput: LogInUserInput
  setLogInUserInput: (input: LogInUserInput) => void
}

export const AppContext = createContext({} as AppState)

const AppProvider: FC = ({ children }) => {
  const [createMovieInput, setCreateMovieInput] = useState<CreateMovieInput>({
    title: '',
    overview: '',
    youtubeLinkUrl: '',
    genre: '',
  })
  const [createUserInput, setCreateUserInput] = useState<CreateUserInput>({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  })
  const [logInUserInput, setLogInUserInput] = useState<LogInUserInput>({
    email: '',
    password: '',
  })
  return (
    <AppContext.Provider
      value={{
        createMovieInput: createMovieInput,
        setCreateMovieInput: setCreateMovieInput,
        createUserInput: createUserInput,
        setCreateUserInput: setCreateUserInput,
        logInUserInput: logInUserInput,
        setLogInUserInput: setLogInUserInput,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider }
