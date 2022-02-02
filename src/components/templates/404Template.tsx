import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import { Bar } from 'components/organisms';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const ErrorPage: FC = () => {
  return (
    <Bar>
      <Box sx={{ textAlign: 'center', mt: '15rem' }}>
        <SentimentVeryDissatisfiedIcon
          color='primary'
          sx={{ width: '10rem', height: '10rem' }}
        />
        <Typography color='primary' fontSize={FontSize['xl']}>
          404 Not Found
        </Typography>
        <Typography color='primary' fontSize={FontSize['s']}>
          お探しのページが見つかりませんでした
        </Typography>
      </Box>
    </Bar>
  );
};

export { ErrorPage };
