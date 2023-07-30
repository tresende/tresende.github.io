import '../styles/global.css'
import Head from 'components/Head'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head />
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
)

export default App
