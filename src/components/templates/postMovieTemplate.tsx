import React, { FC } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { MovieForm } from 'components/organisms/movieForm';

const PostMovieTemplate: FC = () => {
  const isLargeScreenSize = useMediaQuery('(min-width:600px)');
  return (
    <>
      <Typography
        fontFamily='monospace'
        sx={{
          p: 5,
          fontSize: isLargeScreenSize ? '1.8rem' : '1rem',
        }}
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
