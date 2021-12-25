import React, { FC } from 'react';
import { MovieInfo } from 'pages/movie/[id]';
import { Bar, MovieDetailContent } from 'components/organisms';

type MovieDetailsProps = {
  movieInfo: MovieInfo;
};

const MovieDetailTemplate: FC<MovieDetailsProps> = ({ movieInfo }) => {
  return (
    <Bar>
      <MovieDetailContent movieInfo={movieInfo} />
    </Bar>
  );
};

export { MovieDetailTemplate };
