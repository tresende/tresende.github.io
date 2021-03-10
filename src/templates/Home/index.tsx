import Head from 'components/Head'
import Video from 'components/Video'
import Terminal from 'components/Terminal'
import Bio from 'components/Bio'
import Social from 'components/Social'
import Github from 'components/GithubCorner'

import * as S from './styles'

const Home = () => (
  <>
    <Head />
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
