import React from 'react'
import styled, { css } from 'styled-components'
import { Action } from './Action'

const StyledActionTip = styled.div`
  display: flex;
  flex-direction: ${
  props => props.tree === 'right-top' || props.tree === 'right-bottom' || props.alignRight
    ? 'row-reverse'
    : 'row'
};
  align-items: center;
  font-weight: 300;
  letter-spacing: 0.2rem;
  text-align:  ${
  props => props.tree === 'right-top' || props.tree === 'right-bottom' || props.alignRight
    ? 'right'
    : 'left'
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
  min-width: 60px;
  width: 60px;
  justify-content: space-between;
  align-content: flex-start;

  ${StyledAction} {
  /* TODO: hover code here */
  }

/* General Tree */
/* after will draw the horizontal line, and before will draw the vertical line */
&:after , &:before {
  content: '';
  position: absolute;
  background-color: #99a2a8;
}

  /* Left Tree Top Part*/
  ${props => props.tree === 'left-top' && css`
  &:after {
    height: 1px; 
    width: 62px; /* width of interactions container + 2px*/
    top: 19px; /* Action Icons are 18px */
  }
  &:before {
    height: 150px;
    width: 1px;
    top: 20px;
    left: -2px; /* because :after is an extra 2px */
  }`
}
/* Left Tree Bottom Part*/
${props => props.tree === 'left-bottom' && css`
  &:after {
    height: 1px; 
    width: 62px; 
    top: 19px;
  }
  &:before {
    height: 150px;
    width: 1px;
    bottom: 20px;
    left: -2px;
  }`
}

  /* Right Tree Top Part*/
  ${props => props.tree === 'right-top' && css`
  &:after {
    height: 1px; 
    width: 62px;
    top: 19px;
  }
  &:before {
    height: 150px;
    width: 1px;
    top: 20px;
    right: -2px; 
  }`
}

/* Right Tree Bottom Part*/
${props => props.tree === 'right-bottom' && css`
  &:after {
    height: 1px; 
    width: 62px;
    top: 19px;
  }
  &:before {
    height: 150px;
    width: 1px;
    bottom: 20px;
    right: -2px;
  }`
}
`

const NoteWrapper = styled.div`
p {
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  max-width: 350px;
  text-align: left;
  @media (max-width: 600px) {
    max-width: 100%;
    text-align: justify;
  }
}
`

export const ActionTip = ({ name, icon, description, interactions, tree, alignRight, note }) => (
  <NoteWrapper>
    <StyledActionTip tree={tree} alignRight={alignRight}>
      {interactions && <InteractionsContainer tree={tree}>
        {interactions.map((action) =>
          <StyledAction size='18' icon={action.Icon} key={action.Name} />
        )}
      </InteractionsContainer>}
      <Action icon={icon} />

      <ul>
        <li>{name}</li>
        {description && description.map((string) => <li key={string}>{string}</li>)}
      </ul>

    </StyledActionTip>
    {note && <p> {note} </p>}

  </NoteWrapper>
)
