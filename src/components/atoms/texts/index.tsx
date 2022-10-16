import { Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import React, { FC, memo, useMemo } from 'react';

type MovieListTitleProps = { username?: string };

// eslint-disable-next-line react/display-name
const MovieListTitle: FC<MovieListTitleProps> = memo(({ username }) => {
  const styles = {
    textAlign: 'center',
    fontSize: FontSize['m'],
  } as const;

  const titleText = useMemo(() => {
    if (username) {
      return `${username} さんのその他の作品`;
    }
    return '投稿した映画一覧';
  }, [username]);

  return <Typography sx={styles}>{titleText}</Typography>;
});

export { MovieListTitle };
