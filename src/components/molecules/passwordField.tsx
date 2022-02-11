import { Typography } from '@mui/material';
import { FieldContainer } from 'components/atoms/layoutElement';
import { AuthFormTextField } from 'components/atoms/textFields';
import { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type PasswordFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const PasswordField: FC<PasswordFieldProps> = ({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>パスワード</Typography>
      <AuthFormTextField
        type='password'
        error={false}
        placeholder='パスワードを入力してください'
        onChange={onChange}
      />
    </FieldContainer>
  );
};

const ConFirmPasswordField: FC<PasswordFieldProps> = ({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>パスワードの確認</Typography>
      <AuthFormTextField
        type='password'
        error={false}
        placeholder='パスワードを再度入力してください'
        onChange={onChange}
      />
    </FieldContainer>
  );
};

export { PasswordField, ConFirmPasswordField };
