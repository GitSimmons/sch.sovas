import React from 'react'
import styled from 'styled-components'
import * as Icon from './ClassIcons'
import { ActionTips } from './ActionTips'

const icons = {
  ast: Icon.AST,
  brd: Icon.BRD,
  drg: Icon.DRG,
  drk: Icon.DRK,
  mch: Icon.MCH,
  mnk: Icon.MNK,
  nin: Icon.NIN,
  pld: Icon.PLD,
  rdm: Icon.RDM,
  sch: Icon.SCH,
  smn: Icon.SMN,
  war: Icon.WAR,
  whm: Icon.WHM
}

const titles = {
  ast: 'Astrologian',
  brd: 'Bard',
  drg: 'Dragoon',
  drk: 'Dark Knight',
  mch: 'Machinist',
  mnk: 'Monk',
  nin: 'Ninja',
  pld: 'Paladin',
  rdm: 'Red Mage',
  sch: 'Scholar',
  smn: 'Summoner',
  war: 'Warrior',
  whm: 'White Mage'
}

export const JobSkills = ({ job, actions }) => {
  const JobIcon = icons[job]
  const Title = titles[job]

  return (<div>
    <div style={{ 'display': 'flex' }}>
      <h4>{Title}</h4>
      <JobIcon />
    </div>
    <ActionTips actions={actions} job={job} />
  </div>)
}
