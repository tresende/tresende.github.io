import styled from 'styled-components'

export const Paragraph = styled.p`
  line-height: 2rem;
`

export const Bio = styled.p`
  display: flex;
  line-height: 2rem;
`

export const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: 760px) {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  max-width: 40rem;
  height: 38rem;
  padding: 4rem;
  font-size: 1.2rem;
  justify-content: space-around;

  @media only screen and (max-width: 760px) {
    height: 100vh;
  }
`
export const InlineText = styled.div`
  margin-bottom: 10px;
  white-space: nowrap;
`

export const Terminal = styled(InlineText)``

export const Path = styled(InlineText)`
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
  display: flex;
  width: 11rem;
  justify-content: space-between;
  margin: 0 auto;
`

export const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`
