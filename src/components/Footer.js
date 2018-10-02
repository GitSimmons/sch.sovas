import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
display: block;
margin: 2rem auto auto auto;
max-width: 1200px;
position: relative;
p {
  font-size: 0.8rem;
}

&::after {
  content: '';
  position: absolute;
  top: -1rem;
  left: 0px;
  height: 1px;
  width: 100%;
  background: white;
}
`

export const Footer = () => (
  <StyledFooter>
    <p>This guide underwent many revisions based on feedback from The Balance and Reddit, for which I am deeply grateful.</p>
    <p>Please contact me at sovasin#3308 or /u/sovasin_kair if you spot any mistakes or have feedback.</p>
    <p>Thank you for reading. See you in Alphascape!</p>
  </StyledFooter>
)
