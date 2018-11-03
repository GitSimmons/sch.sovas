import React from 'react'
import styled from 'styled-components'
import { getSkillIcon } from './../skills.js'

const StyledAction = styled.div`
  display: inline-block;
  position: relative;
  height: ${props => `${props.size}px`};
  min-width: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  left: 0;
  background:
   ${props => props.icon
    ? `url(./assets/actions/${props.icon}) no-repeat center`
    : props.name
      ? `url(./assets/actions/${getSkillIcon(props.name, props.job)}) no-repeat center`
      : `url('./assets/actions/default.png') no-repeat center`
}
  background-size: ${props => `${props.size - 1 / 6 * props.size}px`};
  
  &::after {
    content: ' ';
    position: absolute;
    background: url('./assets/actions/action-overlay.png') no-repeat center;
    height: ${props => `${props.size}px`};
    min-width: ${props => `${props.size}px`};
    width: ${props => `${props.size}px`};
    background-size: ${props => `${props.size}px`};
    top: 1px;
    left: 0;
}

`

export const Action = (props) => (
  <StyledAction size='48' {...props} />
)
