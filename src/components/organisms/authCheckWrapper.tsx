import React, { FC, useEffect, useState } from 'react';
import { useAuth } from 'contexts/authContext';
import { useRouter } from 'next/router';
import { LoadingPage } from 'components/templates/loadingTemplate';

type AuthCheckWrapperProps = {
  url: string;
};

const AuthCheckWrapper: FC<AuthCheckWrapperProps> = ({ children, url }) => {
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
    if (auth.sessionPersisted != 'processing') {
      verify();
    }
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
