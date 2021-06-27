import Image from 'next/image'

import * as S from './styles'

const Bio = () => (
  <S.Wrapper preload="auto" autoPlay muted loop>
    <Image layout="fill" objectFit="cover" src="/img/fake-bg.png" alt={`busy avenue`} />
    <source
      src="https://raw.githubusercontent.com/tresende/tresende.github.io/master/public/videos/bg.mp4"
      type="video/mp4"
    />
  </S.Wrapper>
)

export default Bio
