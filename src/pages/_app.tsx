import '../styles/global.css'
import Head from 'components/Head'
import { AppProps } from 'next/app'
import { generateNextSeo } from 'next-seo/pages'

import SEO from '../../next-seo.config'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head />
    {generateNextSeo(SEO)}
    <Component {...pageProps} />
  </>
)

export default App
