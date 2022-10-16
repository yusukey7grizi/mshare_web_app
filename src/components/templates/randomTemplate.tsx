import { Box, Button } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { GenreField } from 'components/molecules';
import React, { FC, memo, useContext, useRef } from 'react';
import { MuiAutoCompleteOnChangeEvent, MuiOnClickEvent } from 'types';
import { motion } from 'framer-motion';
import { RandomTitle } from 'components/atoms/titles';
import { AppContext } from 'contexts/appContext';
import { MovieList } from 'components/organisms/movieList';
import { BasePixel, FontSize } from 'components/constants';
import { Bar } from 'components/organisms';
import { PlayerCoreFunctions } from 'components/organisms/playerCoreFunctions';

type Props = {
  onSubmit: (e: MuiOnClickEvent) => void;
  onChange: (event: MuiAutoCompleteOnChangeEvent, value: string | null) => void;
};

// eslint-disable-next-line react/display-name
const RandomTemplate: FC<Props> = memo(({ onSubmit, onChange }) => {
  const { randomMovie, relatedMovieList } = useContext(AppContext);
  const movieDetailRef = useRef<HTMLDivElement>(null);

  const styles = {
    outermostBox: {
      marginLeft: BasePixel * 6,
      marginRight: BasePixel * 6,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: BasePixel * 26,
    },
    titleBox: {
      marginTop: BasePixel * 9,
      marginBottom: BasePixel * 9,
    },
    videoBox: {
      display: 'flex',
      flexDirection: 'column',
    },
    movieListTitleBox: {
      marginTop: BasePixel * 5,
      marginBottom: BasePixel * 5,
    },
  } as const;

  return (
    <>
      <Bar />
      <Box sx={styles.outermostBox}>
        <Box component='form' sx={styles.form} onSubmit={onSubmit}>
          <Box sx={styles.titleBox}>
            <RandomTitle />
          </Box>
          <GenreField onChange={onChange} />
          <Button type='submit' sx={{ fontSize: FontSize['l'] }}>
            ガチャる！
          </Button>
        </Box>
        <MuiDivider mb={BasePixel * 5} mt={BasePixel * 5} />
        {randomMovie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6 }}
          >
            <Box sx={styles.videoBox} ref={movieDetailRef}>
              <PlayerCoreFunctions
                movie={randomMovie}
                movieDetailRef={movieDetailRef}
              />
            </Box>
            <MuiDivider mb={BasePixel * 5} mt={BasePixel * 5} />
            <Box sx={styles.movieListTitleBox}>
              <MovieListTitle username={randomMovie.username} />
            </Box>
            <MovieList movieList={relatedMovieList} />
          </motion.div>
        )}
      </Box>
    </>
  );
});

export { RandomTemplate };
