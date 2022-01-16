import React, { FC, useEffect, useState } from 'react';
import { YouTubePlayer, YouTubeVideoDetails } from 'components/molecules';
import { Box } from '@mui/material';
import { MoviePlayerState } from 'types';
import { Movie } from 'types/dataTypes';
import { FacialExpressionRatingContainer } from '.';

type MovieDetailContainerProps = {
  movie: Movie;
};

const MovieDetailContent: FC<MovieDetailContainerProps> = ({ movie }) => {
  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  });
  const [grinningScore, setGrinningScore] = useState<number>(
    movie.grinningScore
  );

  useEffect(() => {
    setGrinningScore(movie.grinningScore);
  }, [movie]);

  return (
    <Box component='div'>
      <YouTubePlayer movie={movie} setMoviePlayerState={setMoviePlayerState} />
      <YouTubeVideoDetails movie={movie} grinningScore={grinningScore} />
      <FacialExpressionRatingContainer
        moviePlayerState={moviePlayerState}
        movie={movie}
        grinningScore={grinningScore}
        setGrinningScore={setGrinningScore}
      />
    </Box>
  );
};

export { MovieDetailContent };
