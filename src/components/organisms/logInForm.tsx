import { Container, Box } from '@mui/material'
import { FormSubmitButton, GoogleSignInButton } from 'components/atoms/buttons'
import { AuthSwitchLink } from 'components/molecules/AuthSwitchLink'
import { EmailField } from 'components/molecules/emailField'
import { PasswordField } from 'components/molecules/passwordField'
import { AppContext } from 'contexts/appContext'
import { useAuth } from 'contexts/authContext'
import { useRouter } from 'next/router'
import { FormEvent, FormEventHandler, useContext } from 'react'
import { MuiOnChangeEvent } from 'types'

const LogInForm = () => {
  const { logInUserInput, setLogInUserInput } = useContext(AppContext)
  const auth = useAuth()
  const router = useRouter()

  const createOnChangeHandler = (formType: 'email' | 'password') => {
    return ({ target: { value } }: MuiOnChangeEvent) => {
      logInUserInput[formType] = value
      setLogInUserInput(logInUserInput)
    }
  }

  const logIn = (event: FormEvent) => {
    event.preventDefault()
    auth
      .logIn(logInUserInput.email, logInUserInput.password)
      .then(() => {
        console.log('log in successed', auth.user)
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
        onSubmit={(e: FormEvent) => logIn(e)}
      >
        <GoogleSignInButton />
        <EmailField onChange={createOnChangeHandler('email')} />
        <PasswordField onChange={createOnChangeHandler('password')} />
        <FormSubmitButton text='ログイン' />
        <AuthSwitchLink useCase='logIn' />
      </Box>
    </Container>
  )
}

export { LogInForm }
