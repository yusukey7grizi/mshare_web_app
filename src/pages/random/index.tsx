import axios from 'axios';
import { ErrorPage } from 'components/templates/errorTemplate';
import { RandomTemplate } from 'components/templates/randomTemplate';
import { AppContext } from 'contexts/appContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { MuiAutoCompleteOnChangeEvent, MuiOnClickEvent } from 'types';
import { Movie } from 'types/dataTypes';
import { axiosDefaultInstance } from 'utils/axiosConfig';

const Random = () => {
  const router = useRouter();
  const { setRandomMovie, setRelatedMovieList } = useContext(AppContext);
  const [genre, setGenre] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const getRandomMovieHandler = async (e: MuiOnClickEvent) => {
    e.preventDefault();
    setRandomMovie(null);

    axiosDefaultInstance
      .get(`/movies/random?genre=${genre}`)
      .then((res) => {
        const id = res.data.id;
        setRandomMovie(res.data);

        axiosDefaultInstance
          .get(`/movies?userId=${res.data.userId}`)
          .then((res) => {
            setRelatedMovieList(
              res.data.filter((movie: Movie) => {
                return movie.id !== id;
              })
            );
          })
          .catch(() => {
            setIsError(true);
          });
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const handleOnChangeGenre = (
    _: MuiAutoCompleteOnChangeEvent,
    value: string | null
  ) => {
    if (value) {
      setGenre(value);
    }
  };

  useEffect(() => {
    setRandomMovie(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return isError ? (
    <ErrorPage />
  ) : (
    <RandomTemplate
      onChange={handleOnChangeGenre}
      onSubmit={getRandomMovieHandler}
    />
  );
};

export default Random;
