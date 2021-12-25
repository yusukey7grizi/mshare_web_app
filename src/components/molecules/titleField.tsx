import { FormHelperText, Typography } from '@mui/material';
import { FormTextFieldContainer } from 'components/atoms/layoutElement';
import { MovieFormTextField } from 'components/atoms/textFields';
import React, { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type TitleFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const TitleField: FC<TitleFieldProps> = ({ onChange }) => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>タイトル</Typography>
      <MovieFormTextField
        type='text'
        error={false}
        placeholder='タイトルを入力してください'
        onChange={onChange}
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        タイトルを入力してください
      </FormHelperText>
    </FormTextFieldContainer>
  );
};

export { TitleField };
