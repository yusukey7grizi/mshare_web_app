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
  } = useMovie(`/movies/${id}`);

  const {
    data: relatedMovieList,
    isError: isRelatedMovieListError,
    isLoading: isRelatedMovieListLoading,
  } = useRelatedMovieList(() => `/movies?userId=${movie.userId}`);

  const filteredRelatedMovieList = relatedMovieList?.filter(({ id }) => {
    return id !== movie.id;
  });

  if (isMovieError || isRelatedMovieListError) {
    return <ErrorPage />;
  }
  if (isMovieLoading || isRelatedMovieListLoading) {
    return <LoadingPage />;
  }
  return (
    <MovieDetailTemplate
      movie={movie}
      relatedMovieList={filteredRelatedMovieList}
    />
  );
};

export default MovieDetail;
