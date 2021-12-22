import { FC } from 'react'
import { AuthTitle } from '../atoms/titles'
import { LogInForm } from '../organisms/logInForm'

const LoginTemplate: FC = () => {
  return (
    <>
      <AuthTitle />
      <LogInForm />
    </>
  )
}

export { LoginTemplate }
