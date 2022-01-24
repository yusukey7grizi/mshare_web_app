import React, { FC } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { MovieForm } from 'components/organisms/movieForm';
import { FontSize, MinScreenSize } from 'components/constants';

const PostMovieTemplate: FC = () => {
  const isLargeScreenSize = useMediaQuery(MinScreenSize['m']);

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
