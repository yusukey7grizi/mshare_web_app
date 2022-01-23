import { Box, Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import { MovieItem } from 'components/molecules';
import React, { FC } from 'react';
import { Movie } from 'types/dataTypes';

type Props = {
  movieList: Movie[];
};

const MovieList: FC<Props> = ({ movieList }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
      }}
    >
      {movieList.slice(0, 9).map((movie) => {
        return movieList.length === 0 ? (
          <Typography fontSize={FontSize['m']}>
            該当する作品はありません
          </Typography>
        ) : (
          <MovieItem key={movie.id} movie={movie} />
        );
      })}
    </Box>
  );
};

export { MovieList };
