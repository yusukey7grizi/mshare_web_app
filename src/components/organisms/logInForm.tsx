import { Container, Box } from '@mui/material';
import { FormSubmitButton, GoogleSignInButton } from 'components/atoms/buttons';
import { AuthSwitchLink } from 'components/molecules/AuthSwitchLink';
import { EmailField } from 'components/molecules/emailField';
import { PasswordField } from 'components/molecules/passwordField';
import { AppContext } from 'contexts/appContext';
import { useContext } from 'react';
import { MuiOnChangeEvent } from 'types';

const LogInForm = () => {
  const { logInUserInput, setLogInUserInput } = useContext(AppContext);
  const createOnChangeHandler = (formType: 'email' | 'password') => {
    return ({ target: { value } }: MuiOnChangeEvent) => {
      if (!value) {
        return;
      }
      const updatedInput = logInUserInput;
      updatedInput[formType] = value;
      setLogInUserInput({ ...logInUserInput, ...updatedInput });
      console.log(logInUserInput);
    };
  };

  return (
    <Container>
      <Box
        component='form'
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <GoogleSignInButton />
        <EmailField onChange={createOnChangeHandler('email')} />
        <PasswordField onChange={createOnChangeHandler('password')} />
        <FormSubmitButton text='ログイン' />
        <AuthSwitchLink useCase='logIn' />
      </Box>
    </Container>
  );
};

export { LogInForm };
