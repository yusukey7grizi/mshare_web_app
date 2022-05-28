import React, { FC, useEffect, useRef, useState } from 'react';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { MovieList } from 'components/organisms/movieList';
import { FaceRecognition, YouTubePlayer } from 'components/molecules';
import { MoviePlayerState } from 'types';
import { Box } from '@mui/material';
import { Movie } from 'types/dataTypes';
import { Bar } from 'components/organisms';

type Props = {
  movie: Movie;
  relatedMovieList: Movie[];
};

const MovieDetailTemplate: FC<Props> = ({ movie, relatedMovieList }) => {
  const movieDetailRef = useRef<HTMLDivElement>(null);

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
      <Bar>
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          ref={movieDetailRef}
        >
          <YouTubePlayer
            grinningScore={grinningScore}
            movie={movie}
            setMoviePlayerState={setMoviePlayerState}
          />
          <FaceRecognition
            movieDetailRef={movieDetailRef}
            moviePlayerState={moviePlayerState}
            movie={movie}
            grinningScore={grinningScore}
            setGrinningScore={setGrinningScore}
          />
        </Box>
        <MuiDivider />
        <MovieListTitle username={movie.username} />
        <MovieList movieList={relatedMovieList} />
      </Bar>
    )
  );
};

export { MovieDetailTemplate };
