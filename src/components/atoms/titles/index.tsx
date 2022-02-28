import { Link, Typography, Button, useMediaQuery } from '@mui/material';
import { FontSize, ScreenSize } from 'components/constants';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

type SubtitleProps = {
  text: string;
};

const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return <Typography variant='h3'>{text}</Typography>;
};

const BarTitle: FC = () => {
  const router = useRouter();
  return (
    <Link
      onClick={() => {
        router.push('/');
      }}
      underline='none'
      component={Button}
      sx={{ fontWeight: 'bold' }}
      align='center'
      fontSize={FontSize['l']}
      color='primary'
    >
      MShare
    </Link>
  );
};

const AuthTitle: FC = () => {
  return (
    <Typography
      sx={{ marginTop: '50px' }}
      align='center'
      fontSize={FontSize['l']}
    >
      MShare へようこそ！
    </Typography>
  );
};

const RandomTitle: FC = () => {
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);

  return (
    <Typography
      sx={{
        pb: '7rem',
        fontWeight: 'bold',
        pt: '2rem',
        fontSize: isLargerThanIphone ? FontSize.m : FontSize.xs,
      }}
      align='center'
    >
      ランダムガチャ検索で新しい映画と出会おう！
    </Typography>
  );
};

const PostTitle: FC = () => {
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);

  return (
    <Typography
      fontFamily='monospace'
      sx={{
        p: 5,
        fontSize: isLargerThanIphone ? FontSize.m : FontSize.xs,
      }}
      gutterBottom
      align='center'
    >
      自分だけのオリジナル映画を共有しよう　！
    </Typography>
  );
};

export { Subtitle, BarTitle, AuthTitle, RandomTitle, PostTitle };
