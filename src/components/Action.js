import React from 'react'
import styled from 'styled-components'

const StyledAction = styled.div`
  display: inline-block;
  position: relative;
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  background:
   ${props => props.name
    ? `url(./assets/actions/${props.name}) no-repeat center`
    : `url('./assets/actions/default.png') no-repeat center`
}
  background-size: ${props => `${props.size - 1 / 6 * props.size}px`};
  
  
  &::after {
    content: ' ';
    position: absolute;
    background: url('./assets/actions/action-overlay.png') no-repeat center;
    height: ${props => `${props.size}px`};
    width: ${props => `${props.size}px`};
    background-size: ${props => `${props.size}px`};
    top: ${props => `1px`};
    right: 0;
}

`

export const Action = (props) => (
  <StyledAction size='48' {...props} />
)
