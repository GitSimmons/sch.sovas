import React from 'react'
import styled from 'styled-components'
import { ActionTips } from './ActionTips'

const StyledRoleActions = styled.div`
display: grid;
grid-template-columns: auto auto auto;
justify-content: space-between;
/* margin: auto; */
/* justify-content: space-around; */
/* grid-gap: 50px; */
@media (max-width: 1200px) {
  grid-template-columns: auto;
  justify-content: center;
  align-content: center;
  width: 100%;
}
`

export const RoleActions = () => (
  <>
    <h2>Role Actions</h2>
    <StyledRoleActions>

      <div>
        <h3>Essential</h3>
        <ActionTips actions={['Lucid Dreaming', 'Swiftcast']} />
      </div>
      <div>
        <h3>Useful</h3>
        <ActionTips actions={['Protect', 'Esuna', 'Surecast', 'Largesse']} />
      </div>
      <div>
        <h3>Situational</h3>
        <ActionTips actions={['Cleric Stance', 'Break', 'Rescue', 'Eye for an Eye']} />
      </div>
    </StyledRoleActions>
  </>
)
