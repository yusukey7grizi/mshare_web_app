import { Typography } from '@mui/material';
import { FieldContainer } from 'components/atoms/layoutElement';
import { AuthFormTextField } from 'components/atoms/textFields';
import { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type UsernameFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const UsernameField: FC<UsernameFieldProps> = ({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>プロフィール名</Typography>
      <AuthFormTextField
        type='text'
        error={false}
        placeholder='例 sample_user'
        onChange={onChange}
      />
    </FieldContainer>
  );
};

export { UsernameField };
