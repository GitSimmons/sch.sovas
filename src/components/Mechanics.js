import React from 'react'
import styled from 'styled-components'

const StyledMechanics = styled.div`
display: inline-block;
margin: auto;
width: 1500px;
text-align: left;
position: relative;


&::after {
  content:'';
  width:160px; 
  height:1px; 
  background: #99a2a8; 
  position: absolute;
  top:  0px;
  left: -1rem;
  ;
}

&::before {
  content:'';
  height:160px; 
  width:1px; 
  background:#99a2a8; 
  position:absolute;
  left: -1rem;
  ;
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
img {
  position: absolute;
  margin-left: 30px;
}

p, li {
  font-size: .9rem;
  font-weight: 400;
  position: relative;
}
`

export const Mechanics = ({ children }) => (
  <StyledMechanics>
    {children}
  </StyledMechanics>
)
