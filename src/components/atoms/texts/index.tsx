import { Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import React, { FC } from 'react';

type MovieListTitleProps = { username?: string };

const MovieListTitle: FC<MovieListTitleProps> = ({ username }) => {
  return (
    <Typography
      fontSize={FontSize['m']}
      sx={{ textAlign: 'center', pt: '2rem', pb: '1rem' }}
    >
      {username ? `${username} さんのその他の作品` : `投稿した映画一覧`}
    </Typography>
  );
};

export { MovieListTitle };
