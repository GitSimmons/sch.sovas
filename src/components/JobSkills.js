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
  whm: 'White Mage',

  tank: 'Role actions',
  ranged: 'Role actions',
  caster: 'Role actions',
  melee: 'Role actions'

}

const ActionsGroup = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr;
  justify-content: stretch;
  align-content: stretch;
  margin: auto;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr
  }
`
const StyledJobTitle = styled.div`
display: flex;
/* margin: 1rem 1rem 1rem 0px; */
`

const StyledJobSkills = styled.div`
`
export const JobSkills = ({ job, actions }) => {
  const JobIcon = icons[job]
  const Title = titles[job]

  return (
    <StyledJobSkills>
      <StyledJobTitle>
        <h4>{Title}</h4>
        {JobIcon && <JobIcon />}
      </StyledJobTitle>
      <ActionsGroup>
        <ActionTips actions={actions} job={job} />
      </ActionsGroup>
    </StyledJobSkills>)
}
