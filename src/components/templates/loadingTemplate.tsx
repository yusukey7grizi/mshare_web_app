import { Box, CircularProgress, Typography } from '@mui/material';
import { BasePixel, FontSize } from 'components/constants';
import { Bar } from 'components/organisms';
import React from 'react';

const LoadingPage = () => {
  const styles = {
    box: { textAlign: 'center', mt: BasePixel * 60 },
    circularProgress: {
      mb: BasePixel * 4,
    },
    typography: {
      fontSize: FontSize['m'],
    },
  } as const;

  return (
    <Bar>
      <Box sx={styles.box}>
        <CircularProgress
          size={`${BasePixel * 12}px`}
          sx={styles.circularProgress}
        />
        <Typography color='primary' sx={styles.typography}>
          読み込み中...
        </Typography>
      </Box>
    </Bar>
  );
};

export { LoadingPage };
