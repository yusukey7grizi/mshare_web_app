import React, { FC, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { SearchedMovieList as MovieList } from 'components/organisms/searchedMovieList';
import { AppContext } from 'contexts/appContext';
import { FontSize } from 'components/constants';

type Props = {
  userName: string;
  email: string;
};

const ProfileTemplate: FC<Props> = ({ userName, email }) => {
  const { relatedMovieList } = useContext(AppContext);

  return (
    <>
      <Box sx={{ width: '50rem', margin: 'auto' }}>
        <Typography
          sx={{ pl: '8rem', fontWeight: 'bold' }}
          fontSize={FontSize['xl']}
        >
          ユーザーネーム: {userName}
        </Typography>
        <Typography sx={{ pl: '9rem' }} fontSize={FontSize['m']}>
          メールアドレス: {email}
        </Typography>
      </Box>
      <MovieListTitle />
      <MuiDivider />
      <MovieList movieList={relatedMovieList} />
    </>
  );
};

export { ProfileTemplate };
