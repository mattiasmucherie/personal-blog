import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}

export default MyApp
