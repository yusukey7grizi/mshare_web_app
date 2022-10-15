import { Box, Typography } from '@mui/material';
import { FlexBox } from 'components/atoms/layoutElement';
import { BasePixel, FontSize } from 'components/constants';
import { MovieItem } from 'components/molecules';
import React, { FC } from 'react';
import { Movie } from 'types/dataTypes';

type Props = {
  movieList: Movie[];
};

const MovieList: FC<Props> = ({ movieList }) => {
  const styles = {
    flexBox: { overflowX: 'scroll', gap: BasePixel * 2 },
    box: {},
    typography: {
      fontSize: FontSize['m'],
    },
  } as const;

  return (
    <FlexBox sx={styles.flexBox}>
      {movieList.slice(0, 9).map((movie) => {
        return movieList.length === 0 ? (
          <Typography sx={styles.typography}>
            該当する作品はありません
          </Typography>
        ) : (
          <Box sx={styles.box}>
            <MovieItem key={movie.movieId} movie={movie} />
          </Box>
        );
      })}
    </FlexBox>
  );
};

export { MovieList };
