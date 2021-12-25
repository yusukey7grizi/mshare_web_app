import React, { FC } from 'react';
import { Subtitle } from 'components/atoms/titles';
import { MovieInfo } from 'pages/movie/[id]';

type OtherMoviesContainer = {
  movieInfo: MovieInfo;
};

const OtherMoviesContainer: FC<OtherMoviesContainer> = ({ movieInfo }) => {
  return <Subtitle text='他の動画を見る' />;
};

export { OtherMoviesContainer };
