import {
  Autocomplete,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FieldContainer } from 'components/atoms/layoutElement';
import { MinScreenSize } from 'components/constants';
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
  const isLargeScreenSize = useMediaQuery(MinScreenSize['m']);

  return (
    <FieldContainer>
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
    </FieldContainer>
  );
};

export { GenreField };
