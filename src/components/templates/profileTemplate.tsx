import React, { FC } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { FontSize, ScreenSize } from 'components/constants';
import { MovieList } from 'components/organisms/movieList';
import { Movie } from 'types/dataTypes';
import { Bar } from 'components/organisms';

type Props = {
  username: string;
  email: string;
  movieList: Movie[];
};

const ProfileTemplate: FC<Props> = ({ username, email, movieList }) => {
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);
  const fontSize = isLargerThanIphone ? FontSize['m'] : FontSize['xs'];

  return (
    <Bar>
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
          <Typography fontSize={fontSize}>
            ユーザーネーム: {username}
          </Typography>
          <Typography fontSize={fontSize}>メールアドレス: {email}</Typography>
        </Box>
        <MovieListTitle />
        <MuiDivider />
        <MovieList movieList={movieList} />
      </Box>
    </Bar>
  );
};

export { ProfileTemplate };
