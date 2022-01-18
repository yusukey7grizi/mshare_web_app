import React, { FC, useContext, useEffect, useState } from 'react';
import { MovieDetailTemplate } from 'components/templates/movieDetailTemplate';
import { useRouter } from 'next/router';
import { Movie } from 'types/dataTypes';
import { AppContext } from 'contexts/appContext';

const MovieDetail: FC = () => {
  const { setMovie, movie, setRelatedMovieList, relatedMovieList } =
    useContext(AppContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // api fetching here
    const fetchOneMovie = async () => {
      try {
        const res = await fetch(`http://localhost:8000/movies/${id}`);
        const data: Movie = await res.json();

        const { userId } = data;

        const relatedMoviesRes = await fetch(
          `http://localhost:8000/movies?userId=${userId}`
        );
        const relatedMoviesData = await relatedMoviesRes.json();
        const filteredList = relatedMoviesData.filter((data: Movie) => {
          return data.id !== Number(router.query.id);
        });

        setMovie(data);
        setRelatedMovieList(filteredList);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) fetchOneMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return <MovieDetailTemplate />;
};

export default MovieDetail;
