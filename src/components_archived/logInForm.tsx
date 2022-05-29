import { Box } from '@mui/material';
import { CustomSubmitButton } from 'components/atoms/buttons';
import { AuthSwitchLink } from 'components_archived/AuthSwitchLink';
import { EmailField } from 'components_archived/emailField';
import { PasswordField } from 'components_archived/passwordField';
import { AppContext } from 'contexts/appContext';
import { useAuth } from 'contexts/authContext';
import { useRouter } from 'next/router';
import { FormEvent, useContext } from 'react';
import { MuiOnChangeEvent } from 'types';

const LogInForm = () => {
  const { logInUserInput, setLogInUserInput } = useContext(AppContext);
  const auth = useAuth();
  const router = useRouter();

  const createOnChangeHandler = (formType: 'email' | 'password') => {
    return ({ target: { value } }: MuiOnChangeEvent) => {
      logInUserInput[formType] = value;
      setLogInUserInput(logInUserInput);
    };
  };

  const logInHandler = (event: FormEvent) => {
    event.preventDefault();
    auth
      .logIn(logInUserInput.email, logInUserInput.password)
      .then((res) => {
        if (res) {
          router.push(auth.redirectUrl ? auth.redirectUrl : '/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      component='form'
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={(e: FormEvent) => logInHandler(e)}
    >
      <EmailField onChange={createOnChangeHandler('email')} />
      <PasswordField onChange={createOnChangeHandler('password')} />
      <CustomSubmitButton text='ログイン' />
      <AuthSwitchLink useCase='logIn' />
    </Box>
  );
};

export { LogInForm };
