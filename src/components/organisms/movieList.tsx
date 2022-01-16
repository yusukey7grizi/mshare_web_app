import { Box } from '@mui/material';
import { MovieItem } from 'components/molecules';
import React, { FC } from 'react';
import { Movie } from 'types/dataTypes';

type Props = {
  movieList: Movie[];
};

const HomeMovieList: FC<Props> = ({ movieList }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
      }}
    >
      {movieList.slice(0, 9).map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </Box>
  );
};

export { HomeMovieList };
