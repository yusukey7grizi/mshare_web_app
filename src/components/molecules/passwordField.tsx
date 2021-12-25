import { FormHelperText, Typography } from '@mui/material';
import { FormTextFieldContainer } from 'components/atoms/layoutElement';
import { AuthFormTextField } from 'components/atoms/textFields';
import { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type PasswordFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const PasswordField: FC<PasswordFieldProps> = ({ onChange }) => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>パスワード</Typography>
      <AuthFormTextField
        type='password'
        error={false}
        placeholder='パスワードを入力してください'
        onChange={onChange}
      />
      <FormHelperText sx={{ visibility: 'visible' }}>
        パスワードを入力してください
      </FormHelperText>
    </FormTextFieldContainer>
  );
};

const ConFirmPasswordField: FC<PasswordFieldProps> = ({ onChange }) => {
  return (
    <FormTextFieldContainer>
      <Typography gutterBottom>パスワードの確認</Typography>
      <AuthFormTextField
        type='password'
        error={false}
        placeholder='確認のためパスワードを再度入力してください'
        onChange={onChange}
      />
      <FormHelperText error sx={{ visibility: 'hidden' }}>
        パスワードを確認する必要があります
      </FormHelperText>
    </FormTextFieldContainer>
  );
};

export { PasswordField, ConFirmPasswordField };
