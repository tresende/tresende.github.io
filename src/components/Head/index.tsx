import TagManager from 'components/TagManager'
import Head from 'next/head'

const HeadComponent = () => (
  <Head>
    <TagManager />
    <title>(2) Whatsapp</title>
    <meta name="theme-color" content="#000000" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Thiago Resende" />
    <meta name="description" content="Thiago's site" />
    <meta name="keywords" content="React, nextjs, thiago resende, belo horizonte, frontend" />
  </Head>
)

export default HeadComponent
