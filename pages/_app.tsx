import React from 'react'
import GlobalStyles from '../styles/global'
import { AppProps } from 'next/dist/next-server/lib/router/router'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-133675841-1"
      ></script>
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
}

export default App
