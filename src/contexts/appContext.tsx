import React, { createContext, useState, FC } from 'react'
import { CreateMovieInput, CreateUserInput } from 'types'

type AppState = {
  createMovieInput?: CreateMovieInput
  setCreateMovieInput: (input: CreateMovieInput) => void
  createUserInput?: CreateUserInput
  setCreateUserInput: (input: CreateUserInput) => void
}

export const AppContext = createContext({} as AppState)

const AppProvider: FC = ({ children }) => {
  const [createMovieInput, setCreateMovieInput] = useState<CreateMovieInput>({})
  const [createUserInput, setCreateUserInput] = useState<CreateUserInput>({})
  return (
    <AppContext.Provider
      value={{
        createMovieInput: createMovieInput,
        setCreateMovieInput: setCreateMovieInput,
        createUserInput: createUserInput,
        setCreateUserInput: setCreateUserInput,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider }
