import React, { createContext, useState, FC } from 'react'
import { CreateMovieInput, CreateUserInput, LogInUserInput } from 'types'
import { Movie } from 'types/dataTypes'

type AppState = {
  createMovieInput: CreateMovieInput
  setCreateMovieInput: (input: CreateMovieInput) => void
  createUserInput: CreateUserInput
  setCreateUserInput: (input: CreateUserInput) => void
  logInUserInput: LogInUserInput
  setLogInUserInput: (input: LogInUserInput) => void
  setMovieList: (input: Movie[]) => void
  movieList: Movie[]
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
  const [movieList, setMovieList] = useState<Movie[]>([])

  return (
    <AppContext.Provider
      value={{
        createMovieInput: createMovieInput,
        setCreateMovieInput: setCreateMovieInput,
        createUserInput: createUserInput,
        setCreateUserInput: setCreateUserInput,
        logInUserInput: logInUserInput,
        setLogInUserInput: setLogInUserInput,
        setMovieList: setMovieList,
        movieList: movieList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider }
