import { Box, Typography } from '@mui/material';
import { FlexBox } from 'components/atoms/layoutElement';
import { BasePixel, FontSize } from 'components/constants';
import { MovieItem } from 'components/molecules';
import React, { FC, memo, useMemo } from 'react';
import { Movie } from 'types/dataTypes';

type Props = {
  movieList: Movie[];
};

// eslint-disable-next-line react/display-name
const MovieList: FC<Props> = memo(({ movieList }) => {
  const styles = {
    flexBox: { overflowX: 'scroll', gap: BasePixel * 2 },
    box: {},
    typography: {
      fontSize: FontSize['m'],
    },
  } as const;

  const slicedMovieList = useMemo(() => {
    return movieList.slice(0, 9);
  }, [movieList]);

  return (
    <FlexBox sx={styles.flexBox}>
      {slicedMovieList.map((movie) => {
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
});

export { MovieList };
