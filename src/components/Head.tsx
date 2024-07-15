import TagManager from 'components/TagManager'
import Head from 'next/head'

export default function HeadComponent() {
  return (
    <Head>
      <TagManager />
      <title>Thiago Resende</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Thiago Resende" />
      <meta name="description" content="Thiago's site" />
      <meta
        name="keywords"
        content="Java, Javascript, typescript, node thiago resende, belo horizonte, software engineer"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
