import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css'
import { SmartGKThemeProvider } from '../hooks'
import AppLayout from 'common/components/AppLayout/AppLayout'
import { ReduxProvider } from 'redux/provider'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SmartGKThemeProvider>
      <ReduxProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ReduxProvider>
      <ToastContainer position="bottom-left" hideProgressBar={true} />
    </SmartGKThemeProvider>
  )
}

export default MyApp
