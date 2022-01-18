import React, { FC, useContext, useState } from 'react';
import { Bar, MovieDetailContent } from 'components/organisms';
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { AppContext } from 'contexts/appContext';

const MovieDetailTemplate: FC = () => {
  const { movie, relatedMovieList } = useContext(AppContext);

  return (
    movie && (
      <Bar>
        <MovieDetailContent movie={movie} />
        <MovieListTitle userName={movie.userName} />
        <MuiDivider />
        <MovieList movieList={relatedMovieList} />
      </Bar>
    )
  );
};

export { MovieDetailTemplate };
