import { Box, Typography } from '@mui/material';
import { AuthFormTextField } from 'components/atoms/textFields';
import { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type EmailFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const EmailField: FC<EmailFieldProps> = ({ onChange }) => {
  return (
    <Box>
      <Typography gutterBottom>メールアドレス</Typography>
      <AuthFormTextField
        type='email'
        error={false}
        placeholder='メールアドレスを入力してください'
        onChange={onChange}
      />
    </Box>
  );
};

const ConfirmEmailField: FC<EmailFieldProps> = ({ onChange }) => {
  return (
    <Box>
      <Typography gutterBottom>メールアドレスの確認</Typography>
      <AuthFormTextField
        type='email'
        error={false}
        placeholder='確認のためメールアドレスを再度入力してください'
        onChange={onChange}
      />
    </Box>
  );
};

export { EmailField, ConfirmEmailField };
