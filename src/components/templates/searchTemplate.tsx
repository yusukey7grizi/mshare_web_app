import { SearchedMovieList } from 'components/organisms/searchedMovieList';
import { AppContext } from 'contexts/appContext';
import React, { FC, useContext } from 'react';

const SearchTemplate: FC = () => {
  const { searchedMovieList } = useContext(AppContext);

  return (
    <>
      <SearchedMovieList movieList={searchedMovieList} />
    </>
  );
};

export { SearchTemplate };
