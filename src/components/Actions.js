import React from 'react'
import { Action } from './Action'
import { getSkills } from './../skills'

export const Actions = ({ actions, size }) => (
  getSkills(actions).map(({ Icon }) =>
    <Action
      icon={Icon}
      size={size | '48'}
    />
  )
)
