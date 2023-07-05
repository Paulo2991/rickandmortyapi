import createGlobalStyle from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    color: #FAFAFA;
  }

  body {
    background-color: #323157;
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
    display: block;
  }
  button {
    background-color: #d3d93c;
    color: #FAFAFA;
    padding: 1rem;
  }
`

export default GlobalStyle;