import { Link, Typography, Button, useMediaQuery } from '@mui/material';
import { BasePixel, FontSize, ScreenSize } from 'components/constants';
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
  const styles = {
    fontWeight: 'bold',
    fontSize: FontSize['l'],
  } as const;

  return (
    <Link
      onClick={() => {
        router.push('/');
      }}
      underline='none'
      component={Button}
      sx={styles}
      align='center'
    >
      MShare
    </Link>
  );
};

const AuthTitle: FC = () => {
  const styles = {
    marginTop: BasePixel * 13,
    fontSize: FontSize['l'],
  } as const;

  return (
    <Typography sx={styles} align='center'>
      MShare へようこそ！
    </Typography>
  );
};

const RandomTitle: FC = () => {
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);
  const styles = {
    fontWeight: 'bold',
    fontSize: isLargerThanIphone ? FontSize['m'] : FontSize['s'],
  } as const;

  return (
    <Typography sx={styles}>
      ランダムガチャ検索で新しい映画と出会おう！
    </Typography>
  );
};

const PostTitle: FC = () => {
  const isLargerThanIphone = useMediaQuery(ScreenSize.largerThanIphone);
  const styles = {
    fontWeight: 'bold',
    fontSize: isLargerThanIphone ? FontSize['m'] : FontSize['s'],
  } as const;

  return (
    <Typography sx={styles} align='center'>
      自分だけのオリジナル映画を共有しよう！
    </Typography>
  );
};

export { Subtitle, BarTitle, AuthTitle, RandomTitle, PostTitle };
