import { SearchTemplate } from 'components/templates/searchTemplate';
import { AppContext } from 'contexts/appContext';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect } from 'react';
import { useMovieList } from 'utils';

const Search: FC = () => {
  const router = useRouter();
  const { setSearchedMovieList } = useContext(AppContext);
  const { input, useCase } = router.query;
  const isTitle = useCase === 'title';

  const url = isTitle
    ? `http://localhost:8000/movies?title=${input}`
    : `http://localhost:8000/movies?genre=${input}`;
  const { data } = useMovieList(url);

  return <SearchTemplate />;
};

export default Search;
