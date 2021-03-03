import Head from 'next/head'
import SocialLink from 'components/SocialLink'

import * as S from './styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>(2) Whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <S.Video preload="none" autoPlay muted loop>
        <source
          src="https://raw.githubusercontent.com/tresende/tresende.github.io/master/public/videos/bg.mp4"
          type="video/mp4"
        />
      </S.Video>
      <S.Main>
        <S.Container className="flex">
          <S.Terminal>
            <S.Path>
              ~/Projects/tresende.github.io <S.Branch>main*</S.Branch>
            </S.Path>
            <S.Cursor>❯ </S.Cursor>
            <span>cat readme.txt</span>
            <S.Block>_</S.Block>
          </S.Terminal>
          <S.Bio>
            Hello, friend.
            <br />
            My name is Thiago Resende. I&apos;m a frontend developer living in
            Belo Horizonte, Brazil. I&apos;m a technology fan 💾, programming
            👨‍💻, and coffee ☕️. These are my high-level skills: <br />
            - React <br />
            - Angular <br />
            - Node <br />
            - Flutter <br />
            - SNES <br />
            - Play bass <br />
          </S.Bio>
          <S.SocialMedia>
            <SocialLink url="https://github.com/tresende" name="github" />
            <SocialLink
              url="https://www.linkedin.com/in/thiago-resende-46175391"
              name="linkedin"
            />
            <SocialLink url="mailto:thiago.gcresende@gmail.com" name="email" />
            <SocialLink
              url="https://www.instagram.com/thiago.gcr"
              name="instagram"
            />
            <SocialLink
              url="https://www.facebook.com/thiagooooooooooooooo"
              name="facebook"
            />
          </S.SocialMedia>
        </S.Container>
      </S.Main>
    </>
  )
}
