import * as S from './styles'

const Terminal = () => (
  <S.Wrapper>
    <S.Path>
      ~/Projects/tresende.github.io <S.Branch>main*</S.Branch>
    </S.Path>
    <S.Cursor>❯ </S.Cursor>
    <span>cat readme.txt</span>
    <S.Block>_</S.Block>
  </S.Wrapper>
)

export default Terminal
