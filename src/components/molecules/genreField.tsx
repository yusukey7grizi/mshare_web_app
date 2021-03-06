import { Autocomplete, TextField, Typography } from '@mui/material';
import { FieldContainer } from 'components/atoms/layoutElement';
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

  return (
    <FieldContainer>
      <Typography gutterBottom>ジャンル</Typography>
      <Autocomplete
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
