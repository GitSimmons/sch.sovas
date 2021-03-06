import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
display: block;
margin: 5rem auto auto auto;
max-width: 1400px;
text-align: left;
position: relative;
padding: .5rem;

/* before and after make the corner lines */
&::before, &::after {
  content: '';
  background: #99a2a8; 
  position: absolute;
  top:  0px;
}
&::after {
  content:'';
  width:160px; 
  height:1px; 
  left: -1rem;
  ;
}

&::before {
  content:'';
  height:160px; 
  width:1px; 
  left: -1rem;
  ;
}
`

export const Section = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
)
