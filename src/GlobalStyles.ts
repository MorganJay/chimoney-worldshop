import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family: 'Roboto', san-serif;
   }

   html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 20px;
    font-size: 14px;
   }
   
 body {
  /* min-height: 100vh; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0F1111;
}

#root{
  margin: 0 auto;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  ul{
    list-style-type: none;
  }

  img{
    max-width: 100%;
    height: auto;
  }

  button, input, select, textarea {
    margin: 0;
    font-size: 100%;
    vertical-align: middle;
  }

  button {
    cursor: pointer;
  }

  .App {
    width: 95%;
    margin: 0 auto;
  }

`;

export default GlobalStyle;
