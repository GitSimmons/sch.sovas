import React from 'react'
import styled from 'styled-components'
import { Action } from './Action'

const StyledRotation = styled.div`
display: flex;
align-items: center;
justify-content: 'space-between';
position: relative;
`

/* If props.interchangeable, draw a line from first icon to last icon */
const Interchangeable = styled.div`
display: flex;
justify-content: center;
content: '';
position: relative;
bottom: -0.5rem;
width: calc(100% - 48px - 1rem); /* 100% - width of one icon - marginLeft */
background: lightgrey;
color: lightgrey;
height: 1px;
right: 24px;

&::before, &::after {
  content: '';
  position: absolute;
  background: lightgrey;
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
const Time = styled.div`
  position: absolute;
  bottom: -20px; 
  width: ${props => props.width ? props.width : '48px'}; 
  text-align: center; 
  color: lightgrey; 
`
const Seperator = styled.div`
content: '';
height: 58px;
width: 1px;
background: grey;
position: absolute;
right: -0.5rem;
`
export const Rotation = ({ actions, interchangeable, times }) => (
  <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    <StyledRotation>
      {actions.map((action, index) =>
        typeof action === 'string'
          ? <div style={{ paddingLeft: '1rem' }} key={index}><Action name={action} />
            {times && times[index] && <Time>{times[index]}</Time>}</div>
          : <div style={{ display: 'flex', alignItems: 'center' }} key={index}>
            <div style={{ paddingLeft: '1rem' }}><Action name={action[0]} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '80px' }}>
              {action[1][0] && <Action name={action[1][0]} size='40' />}
              {action[1][1] && <Action name={action[1][1]} size='40' />}
            </div>
            {times && times[index] && <Time width='104px'>{times[index]}</Time>}
          </div>
      )
      }
      {times && <Seperator />}
    </StyledRotation>
    {interchangeable && <Interchangeable> <p> Interchangeable </p></Interchangeable>}

  </div>
)
