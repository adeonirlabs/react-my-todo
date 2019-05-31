import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    margin: 0;
    min-width: 360px;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%;
  }
  
  body {
    background-color: #b2bec3;
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    text-rendering: optimizeLegibility !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyle
