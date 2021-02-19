import styled from 'styled-components'

export const Paragraph = styled.p`
  line-height: 2rem;
`

export const Bio = styled.p`
  font-weight: bold;
  line-height: 2.3rem;
`

export const Skills = styled.p`
  font-weight: bold;
  line-height: 2rem;
`

export const Main = styled.main`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: 760px) {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Container = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  @media only screen and (max-width: 760px) {
    height: 100vh;
  }
`

export const Path = styled.div`
  color: greenyellow;
`

export const Cursor = styled.span`
  color: aqua;
`

export const Command = styled.span`
  color: aqua;
`

export const Branch = styled.span`
  color: gray;
`

export const Block = styled.span`
  animation-name: blink;
  animation-duration: 700ms;
  animation-iteration-count: infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const SocialMedia = styled.div`
  text-align: center;
`
