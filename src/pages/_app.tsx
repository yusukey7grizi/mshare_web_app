import { AppProvider } from 'contexts/appContext';
import type { AppProps } from 'next/app';
import 'components/globals.css';
import { AuthProvider } from 'contexts/authContext';
import { ThemeWrapper } from 'components/themeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp;
