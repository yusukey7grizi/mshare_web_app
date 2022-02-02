import React, { FC } from 'react';
import { MovieDetailTemplate } from 'components/templates/movieDetailTemplate';
import { useRouter } from 'next/router';
import { useMovie, useRelatedMovieList } from 'utils';
import { ErrorPage } from 'components/templates/errorTemplate';
import { LoadingPage } from 'components/templates/loadingTemplate';

const MovieDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: movie,
    isError: isMovieError,
    isLoading: isMovieLoading,
  } = useMovie(`http://localhost:8000/movies/${id}`);
  const {
    data: relatedMovieList,
    isError: isRelatedMovieListError,
    isLoading: isRelatedMovieListLoading,
  } = useRelatedMovieList(
    () => `http://localhost:8000/movies?userId=${movie.userId}`
  );

  if (isMovieError || isRelatedMovieListError) {
    return <ErrorPage />;
  }
  if (isMovieLoading || isRelatedMovieListLoading) {
    return <LoadingPage />;
  }
  return (
    <MovieDetailTemplate movie={movie} relatedMovieList={relatedMovieList} />
  );
};

export default MovieDetail;
