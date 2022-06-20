import React, { FC, useRef } from 'react';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { MovieList } from 'components/organisms/movieList';
import { Box } from '@mui/material';
import { Movie } from 'types/dataTypes';
import { Bar } from 'components/organisms';
import { PlayerCoreFunctions } from 'components/organisms/playerCoreFunctions';

type Props = {
  movie: Movie;
  relatedMovieList: Movie[];
};

const MovieDetailTemplate: FC<Props> = ({ movie, relatedMovieList }) => {
  const movieDetailRef = useRef<HTMLDivElement>(null);

  return (
    movie && (
      <Bar>
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          ref={movieDetailRef}
        >
          <PlayerCoreFunctions movie={movie} movieDetailRef={movieDetailRef} />
        </Box>
        <MuiDivider />
        <MovieListTitle username={movie.username} />
        <MovieList movieList={relatedMovieList} />
      </Bar>
    )
  );
};

export { MovieDetailTemplate };
