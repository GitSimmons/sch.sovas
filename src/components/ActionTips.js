import React from 'react'
import { ActionTip } from './ActionTip'
import { getSkills } from './../skills'

export const ActionTips = ({ actions, job, tree, alignRight }) => (
  getSkills(actions, job).map(({ Name, Icon, Description, Interactions, Note }, index) =>
    <ActionTip
      name={Name}
      icon={Icon}
      description={Description}
      interactions={Interactions}
      note={Note}
      key={index}
      alignRight={alignRight}
      tree={tree}
    />
  )
)
