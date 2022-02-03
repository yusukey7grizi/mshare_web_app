import { Box, CircularProgress, Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import { Bar } from 'components/organisms';
import React from 'react';

const LoadingPage = () => {
  return (
    <Bar>
      <Box sx={{ textAlign: 'center', mt: '15rem' }}>
        <CircularProgress size='3rem' sx={{ mb: '1rem' }} />
        <Typography color='primary' fontSize={FontSize['m']}>
          読み込み中...
        </Typography>
      </Box>
    </Bar>
  );
};

export { LoadingPage };
