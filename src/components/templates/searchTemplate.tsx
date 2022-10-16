import { Box, Typography } from '@mui/material';
import { BasePixel, FontSize } from 'components/constants';
import { Bar } from 'components/organisms';
import { SearchedMovieList } from 'components/organisms/searchedMovieList';
import React, { FC, useMemo } from 'react';
import { Movie } from 'types/dataTypes';

type Props = {
  searchedMovieList: Movie[];
  input?: string;
  genre?: string;
};

const SearchTemplate: FC<Props> = ({ searchedMovieList, input, genre }) => {
  const resultTitle = useMemo(() => {
    if (input) {
      return `「${input}」の検索結果 ${searchedMovieList.length}作品`;
    }
    return `「${genre}」 ${searchedMovieList.length}作品`;
  }, [input, genre, searchedMovieList.length]);

  const styles = {
    outermostBox: {
      marginLeft: BasePixel * 6,
      marginRight: BasePixel * 6,
      marginTop: BasePixel * 26,
    },
    resultTitle: {
      textAlign: 'center',
      fontSize: FontSize['l'],
      marginBottom: BasePixel * 5,
    },
  } as const;

  return (
    <>
      <Bar />
      <Box sx={styles.outermostBox}>
        <Typography color='primary' sx={styles.resultTitle}>
          {resultTitle}
        </Typography>
        <SearchedMovieList movieList={searchedMovieList} />
      </Box>
    </>
  );
};

export { SearchTemplate };
