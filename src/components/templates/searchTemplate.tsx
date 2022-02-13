import { Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import { Bar } from 'components/organisms';
import { SearchedMovieList } from 'components/organisms/searchedMovieList';
import React, { FC } from 'react';
import { Movie } from 'types/dataTypes';

type Props = {
  searchedMovieList: Movie[];
  input?: string;
  genre?: string;
};

const SearchTemplate: FC<Props> = ({ searchedMovieList, input, genre }) => {
  return (
    <Bar>
      {input && (
        <Typography
          color='primary'
          sx={{ textAlign: 'center' }}
          fontSize={FontSize['l']}
          gutterBottom
        >
          {`「${input}」の検索結果 ${searchedMovieList.length}作品`}
        </Typography>
      )}
      {genre && (
        <Typography
          color='primary'
          sx={{ textAlign: 'center' }}
          fontSize={FontSize['l']}
          gutterBottom
        >
          {`${genre} ${searchedMovieList.length}作品`}
        </Typography>
      )}
      <SearchedMovieList movieList={searchedMovieList} />
    </Bar>
  );
};

export { SearchTemplate };
