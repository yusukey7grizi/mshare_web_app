import { Box } from '@mui/material';
import { CustomSubmitButton } from 'components/atoms/buttons';
import { AuthSwitchLink } from 'components_archived/AuthSwitchLink';
import { EmailField } from 'components_archived/emailField';
import { PasswordField } from 'components_archived/passwordField';
import { UsernameField } from 'components_archived/usernameField';
import { AppContext } from 'contexts/appContext';
import { useAuth } from 'contexts/authContext';
import { useRouter } from 'next/router';
import { FormEvent, useContext } from 'react';
import { MuiOnChangeEvent } from 'types';

type CreateUserFormInputTypes = 'email' | 'password' | 'username';

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
        pb: '5rem',
      }}
      onSubmit={(e: FormEvent) => createUserHandler(e)}
    >
      <EmailField onChange={createOnChangeHandler('email')} />
      <PasswordField onChange={createOnChangeHandler('password')} />
      <UsernameField onChange={createOnChangeHandler('username')} />
      <CustomSubmitButton text='登録' />
      <AuthSwitchLink useCase='register' />
    </Box>
  );
};

export { RegisterForm };
