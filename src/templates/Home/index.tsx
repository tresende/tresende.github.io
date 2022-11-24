import Bio from 'components/Bio'
import Github from 'components/Github'
import Social from 'components/Social'
import Terminal from 'components/Terminal'
import Video from 'components/Video'

import * as S from './styles'

const Home = () => (
  <>
    <Video />
    <S.Main>
      <S.Container>
        <Terminal />
        <Bio />
        <Social />
      </S.Container>
    </S.Main>
    <Github />
  </>
)

export default Home
