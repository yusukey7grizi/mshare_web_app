import { FC } from 'react';
import { AuthTitle } from 'components/atoms/titles';
import { RegisterForm } from 'components_archived/registerForm';

const RegisterTemplate: FC = () => {
  return (
    <>
      <AuthTitle />
      <RegisterForm />
    </>
  );
};

export { RegisterTemplate };
