import Head from 'next/head'

import Video from 'components/Video'
import Terminal from 'components/Terminal'
import Bio from 'components/Bio'
import Social from 'components/Social'

import * as S from './styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>(2) Whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Video />
      <S.Main>
        <S.Container>
          <Terminal />
          <Bio />
          <Social />
        </S.Container>
      </S.Main>
    </>
  )
}
