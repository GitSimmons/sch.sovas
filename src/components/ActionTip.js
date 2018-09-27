import React from 'react'
import styled, { css } from 'styled-components'
import { Action } from './Action'

const StyledActionTip = styled.div`
  display: flex;
  flex-direction: ${
  props => props.tree === 'left-top' || props.tree === 'left-bottom'
    ? 'row'
    : 'row-reverse'
};
  align-items: center;
  font-weight: 300;
  letter-spacing: 0.2rem;
  text-align:  ${
  props => props.tree === 'left-top' || props.tree === 'left-bottom'
    ? 'left'
    : 'right'
};;
  text-transform: uppercase;
  li {
    list-style: none;
    font-size: 0.7rem;
  }
  ul {
    padding: 0.5rem ;
  }
`
const StyledAction = styled(Action)`
`

const InteractionsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: ${
  props => props.tree === 'left-top' || props.tree === 'left-bottom'
    ? 'wrap-reverse'
    : 'wrap'
};
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
    height: 150px;
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
    height: 150px;
    width: 1px;
    background-color: #99a2a8;
    bottom: 20px;
    left: -2px; /* because :after is an extra 2px */
  }`
}

  /* Right Tree Top Part*/
  ${props => props.tree === 'right-top' && css`
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
    height: 150px;
    width: 1px;
    background-color: #99a2a8;
    top: 20px;
    right: -2px; /* because :after is an extra 2px */
  }`
}

/* Right Tree Bottom Part*/
${props => props.tree === 'right-bottom' && css`
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
    height: 150px;
    width: 1px;
    background-color: #99a2a8;
    bottom: 20px;
    right: -2px; /* because :after is an extra 2px */
  }`
}
`

export const ActionTip = ({ name, icon, description, interactions, tree }) => (
  <StyledActionTip tree={tree}>
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
