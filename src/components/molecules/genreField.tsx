import {
  Autocomplete,
  Box,
  FormHelperText,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { FC } from 'react';
import { MuiAutoCompleteOnChangeEvent } from 'types';

type GenreFieldProps = {
  onChange: (event: MuiAutoCompleteOnChangeEvent, value: string | null) => void;
};

const GenreField: FC<GenreFieldProps> = ({ onChange }) => {
  const options = [
    'アクション映画',
    'ホラー映画',
    'ファンタジー映画',
    'アドベンチャー映画',
    'ミステリー映画',
    '恋愛映画',
    'その他',
  ];
  const isLargeScreenSize = useMediaQuery('(min-width:600px)');

  return (
    <Box sx={{ mb: '2rem' }}>
      <Typography gutterBottom>ジャンル</Typography>
      <Autocomplete
        sx={isLargeScreenSize ? { width: '30rem' } : { width: '15rem' }}
        fullWidth
        options={options}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            required
            placeholder='ジャンルを選択してください'
            {...params}
            variant='standard'
          />
        )}
      />
    </Box>
  );
};

export { GenreField };
