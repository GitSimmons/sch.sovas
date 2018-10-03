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
a {
  text-decoration: none;
  color: grey;
  :hover {
    color: white;
  }
}
`

export const Footer = ({ children }) => (
  <StyledFooter>
    {children}
  </StyledFooter>
)
