import Head from 'next/head'
import TagManager from 'components/TagManager'

const HeadComponent = () => (
  <Head>
    <TagManager />
    <title>(2) Whatsapp</title>
    <meta name="theme-color" content="#444444" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Thiago Resende" />
    <meta name="description" content="Thiago's site" />
    <meta name="keywords" content="React, nextjs, thiago resende, belo horizonte, frontend" />
  </Head>
)

export default HeadComponent
