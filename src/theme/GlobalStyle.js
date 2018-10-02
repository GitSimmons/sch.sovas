import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Work+Sans|Roboto:100,300.400|Raleway');  
html {
  background: linear-gradient(#002534, black);
}
body { 
  background: linear-gradient(#002534, black);
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  height: 100%;
  }
  p, li {
    font-size: 0.9em;
    margin-top: 0;
  }
  h2 {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: .5rem;
  text-transform: uppercase;
  text-align: left;
}
h3 {
  font-size: 1.75rem;
  font-weight: 300;
  letter-spacing: .5rem;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  vertical-align: middle;
}
h4 {
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: .2rem;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  vertical-align: middle;
  margin-top: 1rem
  margin-bottom: 0.5rem

}
  ::selection {
    background: palevioletred; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: palevioletred; /* Gecko Browsers */
  }
  })
`
