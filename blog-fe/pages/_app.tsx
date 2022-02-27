import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
