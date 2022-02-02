import axios from 'axios';
import { RandomTemplate } from 'components/templates/randomTemplate';
import { AppContext } from 'contexts/appContext';
import React, { useContext, useState } from 'react';
import { MuiAutoCompleteOnChangeEvent, MuiOnClickEvent } from 'types';

const Random = () => {
  const { setRandomMovie, setRelatedMovieList } = useContext(AppContext);
  const [genre, setGenre] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const getRandomMovieHandler = async (e: MuiOnClickEvent) => {
    e.preventDefault();
    setRandomMovie(null);
    try {
      axios
        .get(`http://localhost:8000/movies/random?genre=${genre}`)
        .then((res) => {
          setRandomMovie(res.data);
          try {
            axios
              .get(`http://localhost:8000/movies?userId=${res.data.userId}`)
              .then((res) => {
                setRelatedMovieList(res.data);
              });
          } catch (error) {
            setIsError(true);
          }
        });
    } catch (error) {
      setIsError(true);
    }
  };

  const handleOnChangeGenre = (
    _: MuiAutoCompleteOnChangeEvent,
    value: string | null
  ) => {
    if (value) {
      setGenre(value);
    }
  };

  return isError ? (
    <></>
  ) : (
    <RandomTemplate
      onChange={handleOnChangeGenre}
      onSubmit={getRandomMovieHandler}
    />
  );
};

export default Random;
