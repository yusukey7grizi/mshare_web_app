import { AppProvider } from 'contexts/appContext';
import type { AppProps } from 'next/app';
import 'components/globals.css';
import { ThemeWrapper } from 'components/themeProvider';
import { AppState, Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { AuthProvider } from 'contexts/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  const redirectUri =
    process.env.NEXT_PUBLIC_STAGE === 'prod'
      ? process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL_PROD
      : process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL_DEV;

  const router = useRouter();
  const onRedirectCallback = (appState: AppState | undefined) => {
    router.replace(appState?.returnTo || '/');
  };
  const { isAuthenticated, error } = useAuth0();
  useEffect(() => {
    console.log(isAuthenticated);
    console.log(error);
  }, [isAuthenticated, error]);

  return (
    // <AuthProvider> DEPRECATED
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      <AppProvider>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </AppProvider>
    </Auth0Provider>
    // </AuthProvider>
  );
}

export default MyApp;
