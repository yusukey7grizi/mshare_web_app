import React, { FC } from "react";
import { Subtitle } from "components/atoms/titles";
import { MovieDetailsProps } from "components/templates/MovieDetailContent";

const OtherMoviesContainer: FC<MovieDetailsProps> = ({ movieInfo }) => {
  return <Subtitle text="他の動画を見る" />;
};

export { OtherMoviesContainer };
