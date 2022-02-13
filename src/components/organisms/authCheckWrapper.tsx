import React, { FC, useEffect, useState } from 'react';
import { useAuth } from 'contexts/authContext';
import { useRouter } from 'next/router';
import { LoadingPage } from 'components/templates/loadingTemplate';

const AuthCheckWrapper: FC = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();
  const [verificationState, setVerificationState] = useState<
    'verified' | 'processing' | 'failed'
  >('processing');

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await auth.verifyUser();
        // console.log(res);
        (await res)
          ? setVerificationState('verified')
          : setVerificationState('failed');
      } catch (error) {
        setVerificationState('failed');
      }
    };
    if (auth.sessionPersisted) {
      setVerificationState('verified');
      auth.setSessionPesisted(false);
      console.log('verified persisted user in the context useEffect');
    } else if (auth.user && verificationState == 'processing') {
      console.log('verifying current user');
      verify();
    }
  }, [auth.sessionPersisted]);
  switch (verificationState) {
    case 'verified':
      return <>{children}</>;
    case 'failed':
      router.push('/auth/login');
    default:
      return <LoadingPage></LoadingPage>;
  }
};

export { AuthCheckWrapper };
