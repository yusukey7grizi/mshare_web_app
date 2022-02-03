import React, { FC } from 'react';
import { MovieDetailTemplate } from 'components/templates/movieDetailTemplate';
import { useRouter } from 'next/router';
import { useMovie, useRelatedMovieList } from 'utils';

const MovieDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: movie } = useMovie(`http://localhost:8000/movies/${id}`);
  const { data: relatedMovieList } = useRelatedMovieList(
    () => `http://localhost:8000/movies?userId=${movie.userId}`
  );

  return movie && relatedMovieList ? (
    <MovieDetailTemplate movie={movie} relatedMovieList={relatedMovieList} />
  ) : (
    <></>
  );
};

export default MovieDetail;
