import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Work+Sans|Roboto:100,300.400|Raleway');  

body { 
    margin: 0;
    padding: 0;
    background-image: linear-gradient(#002534, black);
    font-family: 'Raleway', sans-serif;
  }
  p, li {
    font-size: 0.9em;
  }
  h2 {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: .5rem;
  text-transform: uppercase;
}
h3 {
  font-size: 1.75rem;
  font-weight: 300;
  letter-spacing: .5rem;
  position: relative;
  text-transform: uppercase;
  vertical-align: middle;
}
  ::selection {
    background: palevioletred; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: palevioletred; /* Gecko Browsers */
  }
  })
`
