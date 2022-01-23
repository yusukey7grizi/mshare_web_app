import { Box, Typography } from '@mui/material';
import { AuthFormTextField } from 'components/atoms/textFields';
import { FC } from 'react';
import { MuiOnChangeEvent } from 'types';

type UsernameFieldProps = {
  onChange: (input: MuiOnChangeEvent) => void;
};

const UsernameField: FC<UsernameFieldProps> = ({ onChange }) => {
  return (
    <Box>
      <Typography gutterBottom>プロフィール名</Typography>
      <AuthFormTextField
        type='text'
        error={false}
        placeholder='プロフィール名を設定してください'
        onChange={onChange}
      />
    </Box>
  );
};

export { UsernameField };
