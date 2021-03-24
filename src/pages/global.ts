import { GlobalStyleComponent, DefaultTheme, createGlobalStyle } from 'styled-components'

const GlobalStyles: GlobalStyleComponent<null, DefaultTheme> = createGlobalStyle`

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
  font-family: 'Open Sans';
}
@media only screen and (max-width: 760px) {
  .github-corner{
    display:none
  }
}

`

export default GlobalStyles
