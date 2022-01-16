import { SearchTemplate } from 'components/templates/searchTemplate';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { Movie } from 'types/dataTypes';

const Search: FC = () => {
  const router = useRouter();
  const [searchedMovieList, setSearchedMovieList] = useState<Movie[]>([]);
  const { input, useCase } = router.query;
  const isTitle = useCase === 'title';

  useEffect(() => {
    const fetchPartialMovies = async () => {
      const url = isTitle
        ? `http://localhost:8000/movies?title=${input}`
        : `http://localhost:8000/movies?genre=${input}`;

      const res = await fetch(url);
      const data = await res.json();
      setSearchedMovieList(data);
    };
    fetchPartialMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return <SearchTemplate searchedMovieList={searchedMovieList} />;
};

export default Search;
