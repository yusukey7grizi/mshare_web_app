import React, { FC, useMemo } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { MuiDivider } from 'components/atoms/divider';
import { MovieListTitle } from 'components/atoms/texts';
import { BasePixel, FontSize, ScreenSize } from 'components/constants';
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

  const usernameText = useMemo(() => {
    return `ユーザーネーム: ${username}`;
  }, [username]);

  const emailText = useMemo(() => {
    return `メールアドレス: ${email}`;
  }, [email]);

  const styles = {
    outermostBox: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: BasePixel * 6,
      marginRight: BasePixel * 6,
      marginTop: BasePixel * 26,
      gap: BasePixel * 10,
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: FontSize['xl'],
    },
    userInfoBox: {
      textAlign: 'left',
      margin: 'auto',
    },
    userInfo: {
      fontSize: fontSize,
    },
  } as const;

  return (
    <>
      <Bar />
      <Box sx={styles.outermostBox}>
        <Typography sx={styles.title} fontSize={FontSize['xl']} color='primary'>
          マイページ
        </Typography>
        <Box sx={styles.userInfoBox}>
          <Typography sx={styles.userInfo}>{usernameText}</Typography>
          <Typography sx={styles.userInfo}>{emailText}</Typography>
        </Box>
        {movieList.length > 0 && (
          <>
            <MovieListTitle />
            <MuiDivider mb={BasePixel * 5} mt={BasePixel * 5} />
            <MovieList movieList={movieList} />
          </>
        )}
      </Box>
    </>
  );
};

export { ProfileTemplate };
