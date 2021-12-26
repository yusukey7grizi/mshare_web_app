import { AppProvider } from 'contexts/appContext'
import type { AppProps } from 'next/app'
import 'components/globals.css'
import { AuthProvider } from 'contexts/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
