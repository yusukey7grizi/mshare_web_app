import { FormHelperText, Typography } from '@mui/material';
import { FormTextFieldContainer } from 'components/atoms/layoutElement';
import { MovieFormTextField } from 'components/atoms/textFields';
import React, { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type YoutubeUrlFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const YoutubeUrlField: FC<YoutubeUrlFieldProps> = ({ onChange }) => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>YouTube URL</Typography>
      <MovieFormTextField
        type='url'
        error={false}
        placeholder='YouTube URLを入力してください'
        onChange={onChange}
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        YouTube URLを入力してください
      </FormHelperText>
    </FormTextFieldContainer>
  );
};

export { YoutubeUrlField };
