import { Link, Typography, Button } from '@mui/material';
import { Color, FontSize } from 'components/constants';
import React, { FC } from 'react';

type SubtitleProps = {
  text: string;
};

const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return <Typography variant='h3'>{text}</Typography>;
};

const BarTitle: FC = () => {
  return (
    <Link
      href='/'
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
      fontSize={FontSize['xl']}
    >
      MShare へようこそ！
    </Typography>
  );
};

const RandomTitle: FC = () => {
  return (
    <Typography
      fontSize={FontSize['s']}
      sx={{ pb: '7rem', fontWeight: 'bold', pt: '2rem' }}
      align='center'
    >
      ランダムガチャ検索で新しい映画と出会おう！
    </Typography>
  );
};

export { Subtitle, BarTitle, AuthTitle, RandomTitle };
