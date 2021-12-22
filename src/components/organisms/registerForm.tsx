import { Container, Box } from '@mui/material'
import { FormSubmitButton, GoogleSignInButton } from '../atoms/buttons'
import { AuthSwitchLink } from '../molecules/AuthSwitchLink'
import { ConfirmEmailField, EmailField } from '../molecules/emailField'
import { ConFirmPasswordField, PasswordField } from '../molecules/passwordField'
import { UsernameField } from '../molecules/usernameField'

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
