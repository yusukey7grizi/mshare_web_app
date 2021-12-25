import React, { createContext, useState, FC } from 'react';
import { CreateMovieInput, CreateUserInput, LogInUserInput } from 'types';

type AppState = {
  createMovieInput: CreateMovieInput;
  setCreateMovieInput: (input: CreateMovieInput) => void;
  createUserInput: CreateUserInput;
  setCreateUserInput: (input: CreateUserInput) => void;
  logInUserInput: LogInUserInput;
  setLogInUserInput: (input: LogInUserInput) => void;
};

export const AppContext = createContext({} as AppState);

const AppProvider: FC = ({ children }) => {
  const [createMovieInput, setCreateMovieInput] = useState<CreateMovieInput>(
    {}
  );
  const [createUserInput, setCreateUserInput] = useState<CreateUserInput>({});
  const [logInUserInput, setLogInUserInput] = useState<LogInUserInput>({});
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
  );
};

export { AppProvider };
