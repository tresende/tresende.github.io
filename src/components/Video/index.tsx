import Image from 'next/image'

import * as S from './styles'

const Bio = () => (
  <S.Wrapper preload="auto" autoPlay muted loop>
    <Image layout="fill" objectFit="cover" src="/img/fake-bg.png" alt={`busy avenue`} />
    <source src="/videos/bg.mp4" type="video/mp4" />
  </S.Wrapper>
)

export default Bio
