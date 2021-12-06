import * as S from './styles'

const Bio = () => (
  <S.Wrapper>
    <p>Hello, friend.</p>
    <p>
      My name is Thiago Resende. I&apos;m a software engineer living in Belo Horizonte, Brazil. I&apos;m a technology
      fan, programming and coffee. These are my high-level skills:
    </p>
    <S.SkillContainer>
      <S.Skill>React</S.Skill>
      <S.Skill>Angular</S.Skill>
      <S.Skill>Node</S.Skill>
      <S.Skill>Flutter</S.Skill>
      <S.Skill>SNES</S.Skill>
      <S.Skill>Bass</S.Skill>
    </S.SkillContainer>
  </S.Wrapper>
)

export default Bio
