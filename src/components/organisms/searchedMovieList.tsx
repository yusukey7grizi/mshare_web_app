import React, { FC } from 'react';
import { Box } from '@mui/material';
import { MovieItem } from 'components/molecules';
import { Movie } from 'types/dataTypes';

type Props = {
  movieList: Movie[];
};

const SearchedMovieList: FC<Props> = ({ movieList }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {movieList.map((movie) => {
        return <MovieItem key={movie.movieId} movie={movie} />;
      })}
    </Box>
  );
};

export { SearchedMovieList };
