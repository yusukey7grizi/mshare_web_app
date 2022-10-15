import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { BasePixel, FontSize } from 'components/constants';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

type Props = {
  title: '500 Internal Server Error' | '404 Not Found' | 'No Results Found';
  subtitle:
    | 'アクセスしようとしたページは表示できませんでした'
    | 'お探しのページが見つかりませんでした'
    | '該当する作品がありませんでした';
};

const ErrorContent: FC<Props> = ({ title, subtitle }) => {
  const styles = {
    box: {
      textAlign: 'center',
      mt: BasePixel * 60,
      ml: BasePixel * 6,
      mr: BasePixel * 6,
    },
    icon: { width: BasePixel * 40, height: BasePixel * 40 },
    title: {
      fontSize: FontSize['xl'],
    },
    subTitle: {
      fontSize: FontSize['s'],
    },
  } as const;

  return (
    <Box sx={styles.box}>
      <SentimentVeryDissatisfiedIcon color='primary' sx={styles.icon} />
      <Typography color='primary' sx={styles.title}>
        {title}
      </Typography>
      <Typography color='primary' sx={styles.subTitle}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export { ErrorContent };
