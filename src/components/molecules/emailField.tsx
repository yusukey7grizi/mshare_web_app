import { Typography } from '@mui/material';
import { FieldContainer } from 'components/atoms/layoutElement';
import { AuthFormTextField } from 'components/atoms/textFields';
import { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type EmailFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const EmailField: FC<EmailFieldProps> = ({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>メールアドレス</Typography>
      <AuthFormTextField
        type='email'
        error={false}
        placeholder='例 sample@gmail.com'
        onChange={onChange}
      />
    </FieldContainer>
  );
};

const ConfirmEmailField: FC<EmailFieldProps> = ({ onChange }) => {
  return (
    <FieldContainer>
      <Typography gutterBottom>メールアドレスの確認</Typography>
      <AuthFormTextField
        type='email'
        error={false}
        placeholder='例 sample@gmail.com'
        onChange={onChange}
      />
    </FieldContainer>
  );
};

export { EmailField, ConfirmEmailField };
