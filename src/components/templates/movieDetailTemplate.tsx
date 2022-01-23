import React, { FC, useContext } from 'react';
import { MovieDetailContent } from 'components/organisms';
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { AppContext } from 'contexts/appContext';

const MovieDetailTemplate: FC = () => {
  const { movie, relatedMovieList } = useContext(AppContext);

  return (
    movie && (
      <>
        <MovieDetailContent movie={movie} />
        <MovieListTitle userName={movie.userName} />
        <MuiDivider />
        <MovieList movieList={relatedMovieList} />
      </>
    )
  );
};

export { MovieDetailTemplate };
