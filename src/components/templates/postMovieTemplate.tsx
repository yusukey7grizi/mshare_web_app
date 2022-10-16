import React, { FC } from 'react';
import { MovieForm } from 'components/organisms/movieForm';
import { Bar } from 'components/organisms';
import { PostTitle } from 'components/atoms/titles';
import { Box } from '@mui/material';
import { BasePixel } from 'components/constants';

const PostMovieTemplate: FC = () => {
  const styles = {
    outermostBox: {
      marginTop: BasePixel * 26,
      marginLeft: BasePixel * 6,
      marginRight: BasePixel * 6,
    },
    postTitleBox: {
      paddingTop: BasePixel * 10,
      paddingBottom: BasePixel * 10,
    },
  } as const;

  return (
    <>
      <Bar />
      <Box sx={styles.outermostBox}>
        <Box sx={styles.postTitleBox}>
          <PostTitle />
        </Box>
        <MovieForm />
      </Box>
    </>
  );
};

export { PostMovieTemplate };
