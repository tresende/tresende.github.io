import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Analytics from 'components/Analytics'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}

export default Document
