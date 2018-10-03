import React from 'react'
import styled from 'styled-components'
import { Action } from './Action'
const StyledRotation = styled.div`
display: flex;
align-items: center;
justify-content: 'space-between';
position: relative;
`
const Interchangeable = styled.div`
display: flex;
justify-content: center;
content: '';
position: relative;
bottom: -0.5rem;
width: calc(100% - 48px - 1rem); /* 100% - width of one icon - marginLeft */
background: grey;
height: 1px;
right: 24px;

&::before, &::after {
  content: '';
  position: absolute;
  background: grey;
  bottom: 0;
}
&::before {
  content: '';
  height: 1rem;
  width:1px;
  left: 0px;
}

&::after{
  height: 1rem;
  width:1px;
  right: 0px;

}

p {
  margin-top: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.10rem;
  font-size: 0.5rem;
}
`
export const Rotation = ({ actions, interchangeable }) => (
  <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    <StyledRotation>
      {actions.map((action) =>
        typeof action === 'string'
          ? <div style={{ paddingLeft: '1rem' }}><Action name={action} /></div>
          : <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ paddingLeft: '1rem' }}><Action name={action[0]} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '80px' }}>
              {action[1][0] && <Action name={action[1][0]} size='40' />}
              {action[1][1] && <Action name={action[1][1]} size='40' />}
            </div>
          </div>
      )
      }
    </StyledRotation>
    {interchangeable && <Interchangeable> <p> Interchangeable </p></Interchangeable>}

  </div>
)
