import React, { FC } from 'react';
import { MovieForm } from 'components/organisms/movieForm';
import { Bar } from 'components/organisms';
import { PostTitle } from 'components/atoms/titles';

const PostMovieTemplate: FC = () => {
  return (
    <Bar>
      <PostTitle />
      <MovieForm />
    </Bar>
  );
};

export { PostMovieTemplate };
