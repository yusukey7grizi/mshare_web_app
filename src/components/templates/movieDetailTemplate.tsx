import React, { FC, useContext, useEffect, useState } from 'react';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { AppContext } from 'contexts/appContext';
import { MovieList } from 'components/organisms/movieList';
import { FaceRecognition, YouTubePlayer } from 'components/molecules';
import { MoviePlayerState } from 'types';
import { Box } from '@mui/material';

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <YouTubePlayer
            grinningScore={grinningScore}
            movie={movie}
            setMoviePlayerState={setMoviePlayerState}
          />
          <FaceRecognition
            moviePlayerState={moviePlayerState}
            movie={movie}
            grinningScore={grinningScore}
            setGrinningScore={setGrinningScore}
          />
        </Box>
        <MuiDivider />
        <MovieListTitle userName={movie.userName} />
        <MovieList movieList={relatedMovieList} />
      </>
    )
  );
};

export { MovieDetailTemplate };
