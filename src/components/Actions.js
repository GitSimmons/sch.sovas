import React from 'react'
import { Action } from './Action'
import { getSkills } from './../skills'

export const Actions = ({ actions }) => (
  getSkills(actions).map(({ Icon }) =>
    <Action
      icon={Icon}
    />
  )
)
