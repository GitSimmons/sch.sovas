import React from 'react'
import styled from 'styled-components'
import data from '../data/skills.json'
import { Action } from '../components/Action'
import { ActionTip } from '../components/ActionTip'

export const Playground = () => {
  return (
    <>
      {data.skills.map((skill, i) => {
        const icon = skill.fields.icon.fields.file.url
        const { name, description, interactions } = skill.fields
        console.log(interactions)

        return (<div key={i}>
          <ActionTip icon={icon} name={name} description={description} interactions={interactions} tree='left-top' />
        </div>)
      })}
    </>
  )
}
