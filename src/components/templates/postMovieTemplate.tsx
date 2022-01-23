import React, { FC } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { MovieForm } from 'components/organisms/movieForm';
import { FontSize } from 'components/constants';

const PostMovieTemplate: FC = () => {
  const isLargeScreenSize = useMediaQuery('(min-width:600px)');
  return (
    <>
      <Typography
        fontFamily='monospace'
        sx={{
          p: 5,
        }}
        fontSize={isLargeScreenSize ? FontSize['xl'] : FontSize['s']}
        gutterBottom
        align='center'
      >
        自分だけのオリジナル映画を共有しよう　！
      </Typography>
      <MovieForm />
    </>
  );
};

export { PostMovieTemplate };
