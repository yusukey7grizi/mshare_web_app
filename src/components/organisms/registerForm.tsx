import { Container, Box } from '@mui/material';
import { FormSubmitButton } from 'components/atoms/buttons';
import { AuthSwitchLink } from 'components/molecules/AuthSwitchLink';
import { ConfirmEmailField, EmailField } from 'components/molecules/emailField';
import {
  ConFirmPasswordField,
  PasswordField,
} from 'components/molecules/passwordField';
import { UsernameField } from 'components/molecules/usernameField';
import { AppContext } from 'contexts/appContext';
import { useContext } from 'react';
import { MuiOnChangeEvent } from 'types';

type CreateUserFormInputTypes =
  | 'email'
  | 'password'
  | 'confirmEmail'
  | 'confirmPassword'
  | 'username';

const RegisterForm = () => {
  const { createUserInput, setCreateUserInput } = useContext(AppContext);

  const createOnChangeHandler = (formType: CreateUserFormInputTypes) => {
    return ({ target: { value } }: MuiOnChangeEvent) => {
      createUserInput[formType] = value;
      setCreateUserInput(createUserInput);
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
        <EmailField onChange={createOnChangeHandler('email')} />
        <ConfirmEmailField onChange={createOnChangeHandler('confirmEmail')} />
        <PasswordField onChange={createOnChangeHandler('password')} />
        <ConFirmPasswordField
          onChange={createOnChangeHandler('confirmPassword')}
        />
        <UsernameField onChange={createOnChangeHandler('username')} />
        <FormSubmitButton text='登録' />
        <AuthSwitchLink useCase='register' />
      </Box>
    </Container>
  );
};

export { RegisterForm };
