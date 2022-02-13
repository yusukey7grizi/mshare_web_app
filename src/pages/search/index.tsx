import { LoadingPage } from 'components/templates/loadingTemplate';
import { ErrorPage } from 'components/templates/errorTemplate';
import { SearchTemplate } from 'components/templates/searchTemplate';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect } from 'react';
import { useMovieList } from 'utils';
import { AppContext } from 'contexts/appContext';
import { ResultNotFound } from 'components/templates/noResultTemplate';

const Search: FC = () => {
  const { setSearchInput } = useContext(AppContext);
  const router = useRouter();
  const { input, useCase } = router.query;
  const isTitle = useCase === 'title';

  const url = isTitle ? `/movies?title=${input}` : `/movies?genre=${input}`;
  const { data: searchedMovieList, isError, isLoading } = useMovieList(url);

  useEffect(() => {
    if (typeof input === 'string') {
      setSearchInput(input);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  if (!input || searchedMovieList.length === 0) {
    return <ResultNotFound />;
  }
  return <SearchTemplate searchedMovieList={searchedMovieList} />;
};

export default Search;
