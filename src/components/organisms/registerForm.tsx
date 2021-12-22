import { Container, Box } from '@mui/material'
import { FormSubmitButton } from 'components/atoms/buttons'
import { AuthSwitchLink } from 'components/molecules/AuthSwitchLink'
import { ConfirmEmailField, EmailField } from 'components/molecules/emailField'
import {
  ConFirmPasswordField,
  PasswordField,
} from 'components/molecules/passwordField'
import { UsernameField } from 'components/molecules/usernameField'

const RegisterForm = () => {
  return (
    <Container>
      <Box
        component="form"
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <EmailField />
        <ConfirmEmailField />
        <PasswordField />
        <ConFirmPasswordField />
        <UsernameField />
        <FormSubmitButton text="登録" />
        <AuthSwitchLink useCase="register" />
      </Box>
    </Container>
  )
}

export { RegisterForm }
