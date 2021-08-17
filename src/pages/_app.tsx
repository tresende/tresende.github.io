import { DefaultSeo } from 'next-seo'

import Head from 'components/Head'
import GlobalStyles from './global'
import SEO from '../../next-seo.config'
import { AppProps } from 'next/dist/shared/lib/router/router'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head />
    <DefaultSeo {...SEO} />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
