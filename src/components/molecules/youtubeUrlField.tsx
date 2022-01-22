import { Box, Typography } from '@mui/material';
import { MovieFormTextField } from 'components/atoms/textFields';
import React, { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type YoutubeUrlFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const YoutubeUrlField: FC<YoutubeUrlFieldProps> = ({ onChange }) => {
  return (
    <Box sx={{ mb: '2rem' }}>
      <Typography gutterBottom>YouTube URL</Typography>
      <MovieFormTextField
        type='url'
        error={false}
        placeholder='YouTube URLを入力してください'
        onChange={onChange}
      />
    </Box>
  );
};

export { YoutubeUrlField };
