import { Typography } from '@mui/material';
import { FieldContainer } from 'components/atoms/layoutElement';
import { MovieFormTextField } from 'components/atoms/textFields';
import React, { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type TitleFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const TitleField: FC<TitleFieldProps> = ({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>タイトル</Typography>
      <MovieFormTextField
        type='text'
        error={false}
        placeholder='タイトルを入力してください'
        onChange={onChange}
      />
    </FieldContainer>
  );
};

export { TitleField };
