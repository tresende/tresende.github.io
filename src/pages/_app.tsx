import { AppProps } from 'next/dist/next-server/lib/router/router'
import { DefaultSeo } from 'next-seo'

import Head from 'components/Head'
import GlobalStyles from './global'
import SEO from '../../next-seo.config'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head />
    <DefaultSeo {...SEO} />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
