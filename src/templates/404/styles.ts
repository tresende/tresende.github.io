import styled from 'styled-components'

export const Wrapper = styled.main`
  @keyframes changeBackgroundColor {
    0% {
      background-color: #2ddfff;
    }
    20% {
      background-color: #f5f474;
    }
    40% {
      background-color: #e33cc7;
    }
    60% {
      background-color: #ffaa47;
    }
    80% {
      background-color: #f54d28;
    }
    100% {
      background-color: #2ddfff;
    }
  }

  animation: changeBackgroundColor 10s linear infinite;
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const ImageRotate = styled.div`
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  margin-top: 4rem;
  animation: rotating 4s linear infinite;
  filter: drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white)
    drop-shadow(-2px -2px 0 white);
`
