import { FC } from 'react';
import { AuthTitle } from 'components/atoms/titles';
import { LogInForm } from 'components_archived/logInForm';

const LoginTemplate: FC = () => {
  return (
    <>
      <AuthTitle />
      <LogInForm />
    </>
  );
};

export { LoginTemplate };
