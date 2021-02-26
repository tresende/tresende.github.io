import React from 'react'
import GithubCorner from 'react-github-corner'
import GlobalStyles from './global'
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
      <GithubCorner
        bannerColor="greenyellow"
        octoColor="#000"
        href="https://github.com/tresende/tresende.github.io"
      />
    </>
  )
}

export default App
