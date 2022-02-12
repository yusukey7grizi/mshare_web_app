import { LoadingPage } from 'components/templates/loadingTemplate';
import { ErrorPage } from 'components/templates/errorTemplate';
import { SearchTemplate } from 'components/templates/searchTemplate';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useMovieList } from 'utils';

const Search: FC = () => {
  const router = useRouter();
  const { input, useCase } = router.query;
  const isTitle = useCase === 'title';

  const url = isTitle ? `/movies?title=${input}` : `/movies?genre=${input}`;
  const { data: searchedMovieList, isError, isLoading } = useMovieList(url);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return <SearchTemplate searchedMovieList={searchedMovieList} />;
};

export default Search;
