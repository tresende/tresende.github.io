import React from 'react'

import * as S from './styles'

const Bio = () => {
  return (
    <S.Wrapper preload="none" autoPlay muted loop>
      <source
        src="https://raw.githubusercontent.com/tresende/tresende.github.io/master/public/videos/bg.mp4"
        type="video/mp4"
      />
    </S.Wrapper>
  )
}
export default Bio
