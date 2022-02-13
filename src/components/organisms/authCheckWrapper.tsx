import React, { FC, useEffect, useRef, useState } from 'react';
import { useAuth } from 'contexts/authContext';
import { useRouter } from 'next/router';
import { LoadingPage } from 'components/templates/loadingTemplate';

type AuthCheckWrapperProps = {
  url: string;
};

const AuthCheckWrapper: FC<AuthCheckWrapperProps> = ({ children, url }) => {
  const auth = useAuth();
  const router = useRouter();
  const refreshed = useRef(false);
  const [verificationState, setVerificationState] = useState<
    'verified' | 'processing' | 'failed'
  >('processing');

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await auth.verifyUser();
        (await res)
          ? setVerificationState('verified')
          : setVerificationState('failed');
      } catch (error) {
        setVerificationState('failed');
      }
    };

    switch (auth.sessionPersisted) {
      case 'expired':
        setVerificationState('failed');
        break; // verify has ran either by this useEffect or the useEffect in authContext and session was not persisted
      case 'persisted': // refreshed ref checks if this is running from the first render or the auth.sessionPersistant prop update
        refreshed.current ? setVerificationState('verified') : verify();
        break;
      case 'processing': // refreshed and verify() has not run;
      default:
        break;
    }

    refreshed.current = true;
  }, [auth.sessionPersisted]);

  switch (verificationState) {
    case 'verified':
      auth.setRedirectUrl('');
      return <>{children}</>;
    case 'failed':
      auth.setRedirectUrl(url);
      router.push('/auth/login');
    default:
      return <LoadingPage></LoadingPage>;
  }
};

export { AuthCheckWrapper };
