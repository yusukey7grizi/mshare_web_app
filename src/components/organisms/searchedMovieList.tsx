import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { MovieItem } from 'components/molecules';
import { Movie } from 'types/dataTypes';
import { FontSize } from 'components/constants';

type Props = {
  movieList: Movie[];
};

const SearchedMovieList: FC<Props> = ({ movieList }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {movieList.length === 0 ? (
        <Typography fontSize={FontSize['m']}>
          該当する作品はありません
        </Typography>
      ) : (
        movieList.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })
      )}
    </Box>
  );
};

export { SearchedMovieList };
