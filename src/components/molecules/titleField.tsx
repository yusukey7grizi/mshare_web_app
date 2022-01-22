import { Box, Typography } from '@mui/material';
import { MovieFormTextField } from 'components/atoms/textFields';
import React, { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type TitleFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const TitleField: FC<TitleFieldProps> = ({ onChange }) => {
  return (
    <Box sx={{ mb: '2rem' }}>
      <Typography gutterBottom>タイトル</Typography>
      <MovieFormTextField
        type='text'
        error={false}
        placeholder='タイトルを入力してください'
        onChange={onChange}
      />
    </Box>
  );
};

export { TitleField };
