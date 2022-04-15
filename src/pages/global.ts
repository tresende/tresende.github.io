import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

body {
  font-family: 'Helvetica';
}
`

export default GlobalStyles
