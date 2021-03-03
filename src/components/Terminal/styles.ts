import styled from 'styled-components'

export const InlineText = styled.div`
  margin-bottom: 1rem;
  white-space: nowrap;
`

export const Wrapper = styled(InlineText)``

export const Path = styled(InlineText)`
  color: greenyellow;
`

export const Branch = styled.span`
  color: gray;
`

export const Cursor = styled.span`
  color: aqua;
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
