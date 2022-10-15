import React, { FC, useRef } from 'react';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { MovieList } from 'components/organisms/movieList';
import { Box, useMediaQuery } from '@mui/material';
import { Movie } from 'types/dataTypes';
import { Bar } from 'components/organisms';
import { PlayerCoreFunctions } from 'components/organisms/playerCoreFunctions';
import { BasePixel, ScreenSize } from 'components/constants';
import { FlexBox } from 'components/atoms/layoutElement';

type Props = {
  movie: Movie;
  relatedMovieList: Movie[];
};

const MovieDetailTemplate: FC<Props> = ({ movie, relatedMovieList }) => {
  const movieDetailRef = useRef<HTMLDivElement>(null);
  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);
  const styles = {
    box: { marginLeft: BasePixel * 6, marginRight: BasePixel * 6 },
    flexBox: {
      flexDirection: 'column',
      marginTop: BasePixel * 26,
    },
    usernameWrapper: {
      marginTop: BasePixel * 5,
      marginBottom: BasePixel * 5,
    },
  } as const;

  return (
    movie && (
      <Box sx={styles.box}>
        <Bar />
        <FlexBox sx={styles.flexBox} ref={movieDetailRef}>
          <PlayerCoreFunctions movie={movie} movieDetailRef={movieDetailRef} />
        </FlexBox>
        <MuiDivider mb={BasePixel * 5} mt={BasePixel * 5} />
        <Box sx={styles.usernameWrapper}>
          <MovieListTitle username={movie.username} />
        </Box>
        <MovieList movieList={relatedMovieList} />
      </Box>
    )
  );
};

export { MovieDetailTemplate };
