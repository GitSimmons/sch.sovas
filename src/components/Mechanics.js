import React from 'react'
import styled from 'styled-components'

const StyledMechanics = styled.div`
display: block;
margin: auto;
max-width: 1200px;
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


img {
  position: absolute;
  margin-left: 30px;
}
`

export const Mechanics = ({ children }) => (
  <StyledMechanics>
    {children}
  </StyledMechanics>
)
