import React from 'react'
import styled from 'styled-components'
import data from '../data/skills.json'

const StyledAction = styled.div`
  display: inline-block;
  position: relative;
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  background:
   ${props => props.icon
    ? `url(${props.icon}) no-repeat center`
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
    top: 1px;
}

`

export const Action = (props) => (
  <StyledAction size='48' {...props} />
)

export const Playground = () => {
  return (
    <>
      {data.skills.map((skill, i) => {
        const icon = skill.fields.icon.fields.file.url
        const { name, description, interactions } = skill.fields

        return (<div key={i}>
          <Action icon={icon} />
          <ul>
            <li>{name}</li>
            {description && description.map((string) => <li key={string}>{string}</li>)}
          </ul></div>)
      })}
    </>
  )
}
