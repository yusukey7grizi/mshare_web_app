import { Container, Box } from '@mui/material'
import { FormSubmitButton, GoogleSignInButton } from 'components/atoms/buttons'
import { AuthSwitchLink } from 'components/molecules/AuthSwitchLink'
import { EmailField } from 'components/molecules/emailField'
import { PasswordField } from 'components/molecules/passwordField'

const LogInForm = () => {
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
        <GoogleSignInButton />
        <EmailField />
        <PasswordField />
        <FormSubmitButton text="ログイン" />
        <AuthSwitchLink useCase="logIn" />
      </Box>
    </Container>
  )
}

export { LogInForm }
