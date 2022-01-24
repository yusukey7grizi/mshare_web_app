import React, { FC, useContext } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { AppContext } from 'contexts/appContext';
import { FontSize, MinScreenSize } from 'components/constants';
import { MovieList } from 'components/organisms/movieList';

type Props = {
  userName: string;
  email: string;
};

const ProfileTemplate: FC<Props> = ({ userName, email }) => {
  const { relatedMovieList } = useContext(AppContext);
  const isLargeScreenSize = useMediaQuery(MinScreenSize['s']);
  const fontSize = isLargeScreenSize ? FontSize['m'] : FontSize['xs'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{ textAlign: 'center', fontWeight: 'bold', pb: '2rem' }}
        fontSize={FontSize['xl']}
      >
        マイページ
      </Typography>
      <Box
        sx={{
          textAlign: 'left',
          margin: 'auto',
          pb: '7rem',
        }}
      >
        <Typography fontSize={fontSize}>ユーザーネーム: {userName}</Typography>
        <Typography fontSize={fontSize}>メールアドレス: {email}</Typography>
      </Box>
      <MovieListTitle />
      <MuiDivider />
      <MovieList movieList={relatedMovieList} />
    </Box>
  );
};

export { ProfileTemplate };
