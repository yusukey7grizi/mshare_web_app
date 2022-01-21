import { RandomTemplate } from 'components/templates/randomTemplate';
import { AppContext } from 'contexts/appContext';
import React, { useContext, useState } from 'react';
import { MuiAutoCompleteOnChangeEvent, MuiOnClickEvent } from 'types';

const Random = () => {
  const { setRandomMovie, setRelatedMovieList } = useContext(AppContext);
  const [genre, setGenre] = useState('');

  const getRandomMovieHandler = async (e: MuiOnClickEvent) => {
    e.preventDefault();
    setRandomMovie(null);
    const res = await fetch(
      `http://localhost:8000/movies/random?genre=${genre}`
    );
    const data = await res.json();
    setRandomMovie(data);

    const { userId } = data;
    const relatedMoviesRes = await fetch(
      `http://localhost:8000/movies?userId=${userId}`
    );
    const relatedMoviesData = await relatedMoviesRes.json();
    setRelatedMovieList(relatedMoviesData);
  };

  const handleOnChangeGenre = (
    _: MuiAutoCompleteOnChangeEvent,
    value: string | null
  ) => {
    if (value) {
      setGenre(value);
    }
  };

  return (
    <RandomTemplate
      onChange={handleOnChangeGenre}
      onSubmit={getRandomMovieHandler}
    />
  );
};

export default Random;
