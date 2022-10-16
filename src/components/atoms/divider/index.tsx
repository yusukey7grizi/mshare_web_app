import React, { FC, memo } from 'react';
import { Divider } from '@mui/material';

// eslint-disable-next-line react/display-name
const MuiDivider: FC<{ mt: number; mb: number }> = memo(({ mt, mb }) => {
  return <Divider sx={{ mt: mt, mb: mb }} />;
});

export { MuiDivider };
