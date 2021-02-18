import React from 'react'
import GlobalStyles from '../styles/global'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import '../styles/layout.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
