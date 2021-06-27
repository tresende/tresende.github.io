import { AppProps } from 'next/dist/next-server/lib/router/router'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import Head from 'components/Head'
import GlobalStyles from './global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head />
    <DefaultSeo {...SEO} />
    <GlobalStyles />
    <Component {...pageProps} />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133675841-1"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-133675841-1');
          `
      }}
    ></script>
  </>
)

export default App
