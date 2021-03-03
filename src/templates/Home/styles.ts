import styled from 'styled-components'

export const Main = styled.main`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: 760px) {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  max-width: 40rem;
  padding: 4rem;
  @media only screen and (max-width: 760px) {
    height: 100vh;
    padding: 2rem;
  }
`
