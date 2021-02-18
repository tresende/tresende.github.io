import {
  GlobalStyleComponent,
  DefaultTheme,
  createGlobalStyle
} from 'styled-components'

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

@font-face {
    font-family: 'Open Sans';
    src:
        local('Open Sans'), local('OpenSans'),
        url('/font/opensans/opensans-regular.woff2') format('woff2'),
        url('/font/opensans/opensans-regular.woff') format('woff'),
        url('/font/opensans/opensans-regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
}


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
  background-image: url(/img/fake-bg.png);
}

`

export default GlobalStyles
