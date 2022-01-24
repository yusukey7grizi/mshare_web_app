import { Typography } from '@mui/material';
import { FieldContainer } from 'components/atoms/layoutElement';
import { MovieFormTextField } from 'components/atoms/textFields';
import React, { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type DescriptionFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const DescriptionField: FC<DescriptionFieldProps> = ({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>概要</Typography>
      <MovieFormTextField
        type='text'
        error={false}
        placeholder='概要を入力してください'
        onChange={onChange}
      />
    </FieldContainer>
  );
};

export { DescriptionField };
