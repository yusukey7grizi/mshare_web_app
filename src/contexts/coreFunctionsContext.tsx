import React, { createContext, useState, FC } from 'react';
import { MoviePlayerState } from 'types';
import { Movie } from 'types/dataTypes';

type CoreFunctionsState = {
  moviePlayerState: MoviePlayerState;
  setMoviePlayerState: (input: MoviePlayerState) => void;
  grinningScore: number;
  setGrinningScore: (input: number) => void;
  scoreBatch: number;
  setScoreBatch: (input: number) => void;
};

export const CoreFunctionsContext = createContext({} as CoreFunctionsState);

const CoreFucntionsProvider: FC = ({ children }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  });
  const [grinningScore, setGrinningScore] = useState<number>(0);
  const [scoreBatch, setScoreBatch] = useState<number>(1);

  return (
    <CoreFunctionsContext.Provider
      value={{
        moviePlayerState: moviePlayerState,
        setMoviePlayerState: setMoviePlayerState,
        grinningScore: grinningScore,
        setGrinningScore: setGrinningScore,
        scoreBatch: scoreBatch,
        setScoreBatch: setScoreBatch,
      }}
    >
      {children}
    </CoreFunctionsContext.Provider>
  );
};

export { CoreFucntionsProvider };
