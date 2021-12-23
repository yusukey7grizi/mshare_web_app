import React, { FC } from "react";
import { MovieInfo } from "pages/movie/[id]";
import {
  Bar,
  MovieDetailContainer,
  OtherMoviesContainer,
  FacialExpressionRatingContainer,
} from "components/organisms";

export type MovieDetailsProps = {
  movieInfo: MovieInfo;
};

const MovieDetailContent: FC<MovieDetailsProps> = ({ movieInfo }) => {
  return (
    <Bar>
      <MovieDetailContainer movieInfo={movieInfo} />
      <OtherMoviesContainer movieInfo={movieInfo} />
      <FacialExpressionRatingContainer />
    </Bar>
  );
};

export { MovieDetailContent };
