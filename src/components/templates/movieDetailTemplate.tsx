import React, { FC, useContext, useEffect, useState } from 'react';
import { FacialExpressionRatingContainer } from 'components/organisms';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { AppContext } from 'contexts/appContext';
import { Box } from '@mui/material';
import { MovieList } from 'components/organisms/movieList';
import { YouTubePlayer } from 'components/molecules';
import { MoviePlayerState } from 'types';

const MovieDetailTemplate: FC = () => {
  const { movie, relatedMovieList } = useContext(AppContext);
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  });
  const [grinningScore, setGrinningScore] = useState<number>(
    movie ? movie.grinningScore : 0
  );

  useEffect(() => {
    if (movie) {
      setGrinningScore(movie.grinningScore);
    }
  }, [movie]);

  return (
    movie && (
      <>
        <YouTubePlayer
          grinningScore={grinningScore}
          movie={movie}
          setMoviePlayerState={setMoviePlayerState}
        />
        <FacialExpressionRatingContainer
          moviePlayerState={moviePlayerState}
          movie={movie}
          grinningScore={grinningScore}
          setGrinningScore={setGrinningScore}
        />
        <MovieListTitle userName={movie.userName} />
        <MuiDivider />
        <MovieList movieList={relatedMovieList} />
      </>
    )
  );
};

export { MovieDetailTemplate };
