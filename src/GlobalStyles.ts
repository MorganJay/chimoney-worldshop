import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:'Amazon Ember';
    font-weight:200; 
    src: url(https://m.media-amazon.com/images/S/sash/Dv1WQ5DdeMS5qP7.woff2) format("woff2"),
          url(https://m.media-amazon.com/images/S/sash/e0LnMbFWJC-TMQz.woff) format("woff");
  }
  @font-face{
      font-family:'Amazon Ember';
      font-weight:200;
      font-style:italic;
      src: url(https://m.media-amazon.com/images/S/sash/ozb5-CLHQWI6Soc.woff2) format("woff2"),url(https://m.media-amazon.com/images/S/sash/twzZHebXjCHBb6v.woff) format("woff");
    }

    @font-face
    {font-family:'Amazon Ember';src:url(https://m.media-amazon.com/images/S/sash/pDxWAF1pBB0dzGB.woff2) format("woff2"),url(https://m.media-amazon.com/images/S/sash/kfKKBuoqcD$AUKL.woff) format("woff");
  }
  
  @font-face{
      font-family:'Amazon Ember';font-style:italic;src:url(https://m.media-amazon.com/images/S/sash/WOnTLzkiaEccV7F.woff2) format("woff2"),
    url(https://m.media-amazon.com/images/S/sash/JJsp0ZvgpfwzJM6.woff) format("woff");
    }
  @font-face {
    font-family:'Amazon Ember';font-weight:500;src:url(https://m.media-amazon.com/images/S/sash/VjTR4RqBzY0mUYx.woff2) format("woff2"),url(https://m.media-amazon.com/images/S/sash/XIvhNCZAsrT80Wz.woff) format("woff");
  }
  
  @font-face{font-family:'Amazon Ember';font-weight:500;font-style:italic;src:url(https://m.media-amazon.com/images/S/sash/KwhNPG8Jz-Vz2X7.woff2) format("woff2"),url(https://m.media-amazon.com/images/S/sash/YAEPfuhs1l-argd.woff) format("woff");
}

@font-face{font-family:'Amazon Ember';font-weight:700;src:url(https://m.media-amazon.com/images/S/sash/KFPk-9IF4FqAqY-.woff2) format("woff2"),url(https://m.media-amazon.com/images/S/sash/mzVbGSgvdBfRLX9.woff) format("woff");
}
@font-face{
  font-family:'Amazon Ember';font-style:italic;font-weight:700;src:url(https://m.media-amazon.com/images/S/sash/2SazJx$EeTHfhMN.woff2) format("woff2"),url(https://m.media-amazon.com/images/S/sash/CjbL$jCCegyfqZ7.woff) format("woff");
}

 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     /* font-family: 'Roboto', san-serif; */
     font-family: 'Amazon Ember', Arial, sans-serif;
   }

   html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 20px;
    font-size: 14px;
   }
   
 body {
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
    user-select: none;
  }

`;

export default GlobalStyle;
