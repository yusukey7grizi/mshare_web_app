import { Box, Button } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { GenreField } from 'components/molecules';
import React, { FC, useContext, useRef } from 'react';
import { MuiAutoCompleteOnChangeEvent, MuiOnClickEvent } from 'types';
import { motion } from 'framer-motion';
import { RandomTitle } from 'components/atoms/titles';
import { AppContext } from 'contexts/appContext';
import { MovieList } from 'components/organisms/movieList';
import { FontSize } from 'components/constants';
import { Bar } from 'components/organisms';
import { PlayerCoreFunctions } from 'components/organisms/playerCoreFunctions';

type Props = {
  onSubmit: (e: MuiOnClickEvent) => void;
  onChange: (event: MuiAutoCompleteOnChangeEvent, value: string | null) => void;
};

const RandomTemplate: FC<Props> = ({ onSubmit, onChange }) => {
  const { randomMovie, relatedMovieList } = useContext(AppContext);
  const movieDetailRef = useRef<HTMLDivElement>(null);

  return (
    <Bar>
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
        <Button type='submit' sx={{ fontSize: FontSize['l'] }}>
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
            component='div'
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            ref={movieDetailRef}
          >
            <PlayerCoreFunctions
              movie={randomMovie}
              movieDetailRef={movieDetailRef}
            />
          </Box>
          <MuiDivider />
          <MovieListTitle username={randomMovie.username} />
          <MovieList movieList={relatedMovieList} />
        </motion.div>
      )}
    </Bar>
  );
};

export { RandomTemplate };
