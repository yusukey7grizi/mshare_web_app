import React, { FC } from 'react';
import { Divider } from '@mui/material';

const MuiDivider: FC<{ mt: number; mb: number }> = ({ mt, mb }) => {
  return <Divider sx={{ mt: mt, mb: mb }} />;
};

export { MuiDivider };
