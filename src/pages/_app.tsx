import Head from 'components/Head'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import GlobalStyles from './global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head />
    <DefaultSeo {...SEO} />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
