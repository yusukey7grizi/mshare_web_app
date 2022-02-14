import React, { createContext, useState, FC } from 'react';
import { CreateMovieInput, CreateUserInput, LogInUserInput } from 'types';
import { Movie } from 'types/dataTypes';

type Maybe<T> = T | null;

type AppState = {
  createMovieInput: CreateMovieInput;
  setCreateMovieInput: (input: CreateMovieInput) => void;
  createUserInput: CreateUserInput;
  setCreateUserInput: (input: CreateUserInput) => void;
  logInUserInput: LogInUserInput;
  setLogInUserInput: (input: LogInUserInput) => void;
  setMovieList: (input: Movie[]) => void;
  movieList: Movie[];
  setMovie: (input: Movie) => void;
  movie: Maybe<Movie>;
  setRelatedMovieList: (input: Movie[]) => void;
  relatedMovieList: Movie[];
  setRandomMovie: (input: Maybe<Movie>) => void;
  randomMovie: Maybe<Movie>;
  setSearchedMovieList: (input: Movie[]) => void;
  searchedMovieList: Movie[];
  searchInput: string;
  setSearchInput: (input: string) => void;
};

export const AppContext = createContext({} as AppState);

const AppProvider: FC = ({ children }) => {
  const [createMovieInput, setCreateMovieInput] = useState<CreateMovieInput>({
    title: '',
    overview: '',
    youtubeLinkUrl: '',
    genre: '',
  });
  const [createUserInput, setCreateUserInput] = useState<CreateUserInput>({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });
  const [logInUserInput, setLogInUserInput] = useState<LogInUserInput>({
    email: '',
    password: '',
  });
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [relatedMovieList, setRelatedMovieList] = useState<Movie[]>([]);
  const [searchedMovieList, setSearchedMovieList] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Maybe<Movie>>(null);
  const [randomMovie, setRandomMovie] = useState<Maybe<Movie>>(null);
  const [searchInput, setSearchInput] = useState<string>('');

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
        setRelatedMovieList: setRelatedMovieList,
        relatedMovieList: relatedMovieList,
        setMovie: setMovie,
        movie: movie,
        setRandomMovie: setRandomMovie,
        randomMovie: randomMovie,
        setSearchedMovieList: setSearchedMovieList,
        searchedMovieList: searchedMovieList,
        setSearchInput: setSearchInput,
        searchInput: searchInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
