import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Work+Sans|Roboto:100,300.400');  

body { 
    margin: 0;
    padding: 0;
    background-color: #002432;
  }
  p {
    font-family: 'Work Sans', sans-serif;
  }
  ::selection {
    background: palevioletred; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: palevioletred; /* Gecko Browsers */
  }
  })
`
