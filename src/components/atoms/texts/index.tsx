import { Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import React, { FC } from 'react';

type MovieListTitleProps = { userName?: string };

const MovieListTitle: FC<MovieListTitleProps> = ({ userName }) => {
  return (
    <Typography
      fontSize={FontSize['m']}
      sx={{ textAlign: 'center', pt: '2rem', pb: '1rem' }}
    >
      {userName ? `${userName} さんのその他の作品` : `投稿した映画一覧`}
    </Typography>
  );
};

export { MovieListTitle };
