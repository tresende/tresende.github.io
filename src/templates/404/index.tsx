import Image from 'next/image'

import * as S from './styles'

const Custom404 = () => (
  <S.Wrapper>
    <h1>404</h1>
    <span>Ops... it looks like this page doesn`t exist yet</span>
    <S.ImageRotate>
      <Image width={250} height={323} src="/img/404.png" alt={`busy avenue`} />
    </S.ImageRotate>
  </S.Wrapper>
)

export default Custom404
