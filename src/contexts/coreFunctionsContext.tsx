import React, { createContext, useState, FC } from 'react';
import { MoviePlayerState } from 'types';

type CoreFunctionsState = {
  moviePlayerState: MoviePlayerState;
  setMoviePlayerState: (input: MoviePlayerState) => void;
};

export const CoreFunctionsContext = createContext({} as CoreFunctionsState);

const CoreFucntionsProvider: FC = ({ children }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  });

  return (
    <CoreFunctionsContext.Provider
      value={{
        moviePlayerState: moviePlayerState,
        setMoviePlayerState: setMoviePlayerState,
      }}
    >
      {children}
    </CoreFunctionsContext.Provider>
  );
};

export { CoreFucntionsProvider };
