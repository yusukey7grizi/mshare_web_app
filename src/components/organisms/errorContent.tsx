import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { FontSize } from 'components/constants';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

type Props = {
  title: '500 Internal Server Error' | '404 Not Found' | 'No Results Found';
  subtitle:
    | 'アクセスしようとしたページは表示できませんでした'
    | 'お探しのページが見つかりませんでした'
    | '該当する作品がありませんでした';
};

const ErrorContent: FC<Props> = ({ title, subtitle }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: '15rem' }}>
      <SentimentVeryDissatisfiedIcon
        color='primary'
        sx={{ width: '10rem', height: '10rem' }}
      />
      <Typography color='primary' fontSize={FontSize['xl']}>
        {title}
      </Typography>
      <Typography color='primary' fontSize={FontSize['s']}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export { ErrorContent };
