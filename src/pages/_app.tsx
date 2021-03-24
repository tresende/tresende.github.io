import { AppProps } from 'next/dist/next-server/lib/router/router'

import GlobalStyles from './global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
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
