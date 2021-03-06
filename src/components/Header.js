import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  margin: 50px 0px 50px;
  text-align: center;
  h1 {
    font-family: 'Playfair Display';
    font-weight: lighter;
    letter-spacing: 1rem;
    margin-top: 0px;
    text-transform: uppercase;

  }
  h4 {
    color: #99a2a8;
    font-weight: 100;
    font-size: 12px;
    letter-spacing: .5rem;
    text-transform: uppercase;
    text-align: center;
    a {
      color: #99a2a8;
      text-decoration: none;
      :hover {
        color: white;
      }
    }
  }
`

export const Header = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
)
