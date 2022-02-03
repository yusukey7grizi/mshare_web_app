import { SearchedMovieList } from 'components/organisms/searchedMovieList';
import React, { FC } from 'react';
import { Movie } from 'types/dataTypes';

type Props = {
  searchedMovieList: Movie[];
};
const SearchTemplate: FC<Props> = ({ searchedMovieList }) => {
  return (
    <>
      <SearchedMovieList movieList={searchedMovieList} />
    </>
  );
};

export { SearchTemplate };
