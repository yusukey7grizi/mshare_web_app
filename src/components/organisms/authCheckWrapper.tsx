import React, { FC } from 'react';
import { useAuth } from 'contexts/authContext';
import { LoadingPage } from 'components/templates/loadingTemplate';

const AuthCheckWrapper: FC = ({ children }) => {
  const auth = useAuth();

  return auth.isProcessing ? <LoadingPage></LoadingPage> : <>{children}</>;
};

export { AuthCheckWrapper };
