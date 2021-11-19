import { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { Navbar } from '../components/navbar/index'
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Navbar />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
