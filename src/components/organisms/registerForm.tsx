import { Box } from '@mui/material';
import { CustomSubmitButton } from 'components/atoms/buttons';
import { AuthSwitchLink } from 'components/molecules/AuthSwitchLink';
import { ConfirmEmailField, EmailField } from 'components/molecules/emailField';
import {
  ConFirmPasswordField,
  PasswordField,
} from 'components/molecules/passwordField';
import { UsernameField } from 'components/molecules/usernameField';
import { AppContext } from 'contexts/appContext';
import { useAuth } from 'contexts/authContext';
import { useRouter } from 'next/router';
import { FormEvent, useContext } from 'react';
import { MuiOnChangeEvent } from 'types';

type CreateUserFormInputTypes =
  | 'email'
  | 'password'
  | 'confirmEmail'
  | 'confirmPassword'
  | 'username';

const RegisterForm = () => {
  const { createUserInput, setCreateUserInput } = useContext(AppContext);
  const auth = useAuth();
  const router = useRouter();

  const createOnChangeHandler = (formType: CreateUserFormInputTypes) => {
    return ({ target: { value } }: MuiOnChangeEvent) => {
      createUserInput[formType] = value;
      setCreateUserInput(createUserInput);
    };
  };

  const createUserHandler = (event: FormEvent) => {
    event.preventDefault();
    auth
      .createUser(
        createUserInput.email,
        createUserInput.password,
        createUserInput.username
      )
      .then(() => {
        router.push('/');
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
        pb: '5rem',
      }}
      onSubmit={(e: FormEvent) => createUserHandler(e)}
    >
      <EmailField onChange={createOnChangeHandler('email')} />
      <ConfirmEmailField onChange={createOnChangeHandler('confirmEmail')} />
      <PasswordField onChange={createOnChangeHandler('password')} />
      <ConFirmPasswordField
        onChange={createOnChangeHandler('confirmPassword')}
      />
      <UsernameField onChange={createOnChangeHandler('username')} />
      <CustomSubmitButton text='登録' />
      <AuthSwitchLink useCase='register' />
    </Box>
  );
};

export { RegisterForm };
