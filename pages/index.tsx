import Head from 'next/head'

import * as S from '../styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>(2) Whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <video preload="none" autoPlay muted loop className="background-video">
        <source
          src="https://raw.githubusercontent.com/tresende/tresende.github.io/master/public/videos/bg.mp4"
          type="video/mp4"
        />
      </video>
      <S.Main className="flex">
        <S.Container className="box flex">
          <div className="terminal">
            <S.Path className="path">
              ~/Projects/tresende.github.io <S.Branch>master*</S.Branch>
            </S.Path>
            <S.Cursor>❯ </S.Cursor>
            <span>cat readme.txt</span>
            <S.Block>_</S.Block>
          </div>
          <div className="flex">
            <S.Bio>
              Hello, friend.
              <br />
              My name is Thiago Resende. I&apos;m a web developer living in Belo
              Horizonte, Brazil. I&apos;m a fan of technology, programming, and
              coffee. These are my high-level skills: <br />
              - React <br />
              - Angular <br />
              - Node <br />
              - Flutter <br />
              - SNES <br />- Play bass
            </S.Bio>
          </div>
          <S.SocialMedia>
            <a
              href="https://github.com/tresende"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/img/github.png" alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-resende-46175391"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/img/linkedin.png" alt="Linkedin icon" />
            </a>
            <a
              href="mailto:thiago.gcresende@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/email.png" alt="Mail icon" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.facebook.com/thiagooooooooooooooo"
              target="_blank"
            >
              <img src="/img/facebook.png" alt="Facebook icon" />
            </a>
            <a
              href="https://www.instagram.com/thiago.gcr/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/instragram.png" alt="Instagram icon" />
            </a>
          </S.SocialMedia>
        </S.Container>
      </S.Main>
    </>
  )
}
