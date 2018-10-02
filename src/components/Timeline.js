import React from 'react'
import styled from 'styled-components'
import { Actions } from './Actions'

const width = '350'

const StyledTimeline = styled.div`
display: block;
position: relative;
margin-left: 0.5rem;
margin-top: 4.5rem;
margin-bottom: 8rem;
width: ${props => props.width ? `${props.width}px` : '350px'};
text-align: center;
font-size: 0.5rem;
letter-spacing: 0.1rem;
`
const CenterLine = styled.div`
position: absolute;
top: 50%;
height: 1px;
width: 100%;
background-color: white;
`
const Point = styled.div`
position: absolute;
top: -.5rem;
left: ${props => props.time ? `${props.time}%` : '50%'};
height: 1rem;
width: 1px;
text-align: center;
text-transform: uppercase;
background-color: white;

&:after {
  position: absolute;
  /* display: block; */
  content: ${props => props.label ? `'${props.label}'` : null};
  top: 1rem;
  width: ${props => props.width ? `${props.width}px` : null};
  text-align: center;
}
 span {
   position: absolute;
   width: 100%;
 }
`
const Time = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
bottom: 1rem;
transform: translateX(-50%);
margin-bottom: 0.25rem;
p {
  font-size: 0.5rem;
  letter-spacing: 0.1rem;
  margin: 0.25rem;
}
`

export const Timeline = () => (
  <StyledTimeline width={width}>
    <CenterLine />
    <Point time='0' label='Cast' width={width / 2}>
      <Time> <Actions actions={['Succor']} size='20' />0.0</Time>
    </Point>
    <Point time='50' label='Heal Propagation' width={width / 5}>
      <Time>
        2.5
      </Time>
    </Point>
    <Point time='70' label='Shield Delay' width={0.3 * width}>
      <Time>
        <p>GALVANIZE APPEARS</p>
        <Actions actions={['Adloquium']} size='20' />
        3.5
      </Time>
    </Point>
    <Point time='100' >
      <Time><p>GALVANIZE TAKES EFFECT</p>5.0</Time>
    </Point>
  </StyledTimeline>
)
