import { Box, Button } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import {
  FaceRecognition,
  GenreField,
  YouTubePlayer,
} from 'components/molecules';
import React, { FC, useContext, useEffect, useState } from 'react';
import {
  MoviePlayerState,
  MuiAutoCompleteOnChangeEvent,
  MuiOnClickEvent,
} from 'types';
import { motion } from 'framer-motion';
import { RandomTitle } from 'components/atoms/titles';
import { AppContext } from 'contexts/appContext';
import { MovieList } from 'components/organisms/movieList';

type Props = {
  onSubmit: (e: MuiOnClickEvent) => void;
  onChange: (event: MuiAutoCompleteOnChangeEvent, value: string | null) => void;
};

const RandomTemplate: FC<Props> = ({ onSubmit, onChange }) => {
  const { randomMovie, relatedMovieList } = useContext(AppContext);

  const [moviePlayerState, setMoviePlayerState] = useState<MoviePlayerState>({
    playerState: -1,
    currentTime: 0,
    duration: 0,
  });
  const [grinningScore, setGrinningScore] = useState<number>(
    randomMovie ? randomMovie.grinningScore : 0
  );

  useEffect(() => {
    if (randomMovie) {
      setGrinningScore(randomMovie.grinningScore);
    }
  }, [randomMovie]);

  return (
    <>
      <Box
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={onSubmit}
      >
        <RandomTitle />
        <GenreField onChange={onChange} />
        <Button type='submit' sx={{ fontSize: '1.5rem' }}>
          ガチャる！
        </Button>
      </Box>
      <MuiDivider />

      {randomMovie && (
        //need the Youtube component and the FaceRecognition component
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 6 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <YouTubePlayer
              grinningScore={grinningScore}
              movie={randomMovie}
              setMoviePlayerState={setMoviePlayerState}
            />
            <FaceRecognition
              moviePlayerState={moviePlayerState}
              movie={randomMovie}
              grinningScore={grinningScore}
              setGrinningScore={setGrinningScore}
            />
          </Box>
          <MovieListTitle userName={randomMovie.userName} />
          <MovieList movieList={relatedMovieList} />
        </motion.div>
      )}
    </>
  );
};

export { RandomTemplate };
