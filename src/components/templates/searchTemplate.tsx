import { Bar } from 'components/organisms';
import { SearchedMovieList } from 'components/organisms/searchedMovieList';
import { AppContext } from 'contexts/appContext';
import React, { FC, useContext } from 'react';

const SearchTemplate: FC = () => {
  const { searchedMovieList } = useContext(AppContext);

  return (
    <Bar>
      <SearchedMovieList movieList={searchedMovieList} />
    </Bar>
  );
};

export { SearchTemplate };
