import { FC } from 'react'
import { AuthTitle } from '../atoms/titles'
import { RegisterForm } from '../organisms/registerForm'

const RegisterTemplate: FC = () => {
  return (
    <>
      <AuthTitle />
      <RegisterForm />
    </>
  )
}

export { RegisterTemplate }
