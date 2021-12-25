import { AppProvider } from 'contexts/appContext'
import type { AppProps } from 'next/app'
import 'components/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
