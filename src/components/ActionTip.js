import React from 'react'
import styled, { css } from 'styled-components'
import { Action } from './Action'

const StyledActionTip = styled.div`
display: flex;
align-items: center;
font-family: 'Roboto', sans-serif;
font-weight: 100;
font-size: 0.8rem;
letter-spacing: 0.2rem;
text-align: left;
text-transform: uppercase;
li {
  list-style: none;
}
ul {
  padding-left: 0.5rem;
}
`
const StyledAction = styled(Action)`
`

const InteractionsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: column;
  height: 40px;
  width: 60px;
  justify-content: space-between;
  align-content: flex-start;

  ${StyledAction} {
  /* TODO: hover code here */
  }


  /* Left Tree Top Part*/
  ${props => props.tree === 'left-top' && css`
  &:after {
    content: '';
    position: absolute;
    height: 1px; 
    width: 62px; /* width of container + 2px*/
    background-color: #99a2a8;
    top: 19px; /* Action Icons are 18px */
  }
  &:before {
    content: '';
    position: absolute;
    height: 120px;
    width: 1px;
    background-color: #99a2a8;
    top: 20px;
    left: -2px; /* because :after is an extra 2px */
  }`
}
/* Left Tree Bottom Part*/
${props => props.tree === 'left-bottom' && css`
  &:after {
    content: '';
    position: absolute;
    height: 1px; 
    width: 62px; /* width of container + 2px*/
    background-color: #99a2a8;
    top: 19px; /* Action Icons are 18px */
  }
  &:before {
    content: '';
    position: absolute;
    height: 120px;
    width: 1px;
    background-color: #99a2a8;
    bottom: 20px;
    left: -2px; /* because :after is an extra 2px */
  }`
}
`

export const ActionTip = ({ name, icon, description, interactions, tree }) => (
  <StyledActionTip>
    <InteractionsContainer tree={tree}>
      {interactions && interactions.map((action) =>
        <StyledAction size='18' name={action.Icon} key={action.Name} />
      )}
    </InteractionsContainer>
    <Action name={icon} />

    <ul>
      <li>{name}</li>
      {description && description.map((string) => <li key={string}>{string}</li>)}
    </ul>

  </StyledActionTip>
)
