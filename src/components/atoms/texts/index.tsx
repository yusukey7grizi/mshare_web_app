import { Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import React, { FC } from 'react';

type MovieListTitleProps = { username?: string };

const MovieListTitle: FC<MovieListTitleProps> = ({ username }) => {
  const styles = {
    textAlign: 'center',
    fontSize: FontSize['m'],
  } as const;

  return (
    <Typography sx={styles}>
      {username ? `${username} さんのその他の作品` : `投稿した映画一覧`}
    </Typography>
  );
};

export { MovieListTitle };
