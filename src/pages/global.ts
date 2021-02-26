import {
  GlobalStyleComponent,
  DefaultTheme,
  createGlobalStyle
} from 'styled-components'

const GlobalStyles: GlobalStyleComponent<
  null,
  DefaultTheme
> = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

body {
  font-family: 'Open Sans';
  background-image: url(/img/fake-bg-min.png);
}
@media only screen and (max-width: 760px) {
  .github-corner{
    display:none
  }
}

`

export default GlobalStyles
