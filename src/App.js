import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import { ActionTip } from './components/ActionTip'
import { Header } from './components/Header'
import { Mechanics } from './components/Mechanics'
import { GlobalStyle } from './theme/GlobalStyle'
import { schSkills } from './skills.js'

const getSkills = (array) => array.map((name) => schSkills[name])

const STHeals = getSkills(['Physick', 'Adloquium', 'Lustrate', 'Excogitation', 'Aetherpact (Fey Union)', 'Embrace'])
const MTHeals = getSkills(['Indomitability', 'Succor', 'Sacred Soil', 'Whispering Dawn (Eos)', 'Fey Covenant (Eos)', 'Fey Illumination (Eos)'])
const STDPS = getSkills(['Broil II', 'Miasma', 'Bio II', 'Ruin II', 'Energy Drain'])
const MTDPS = getSkills(['Miasma II', 'Shadow Flare', 'Bane'])
const SCHMisc = getSkills(['Resurrection', 'Aetherflow', 'Deployment Tactics', 'Emergency Tactics', 'Chain Stratagem'])
const PetMisc = getSkills(['Summon', 'Summon II', 'Sustain', 'Rouse', 'Dissipation', 'Dissolve Union'])

const Container = styled.div`
display: inline-block;
position: relative; 
margin: auto;
padding: 2rem 2rem 2rem 2rem;
vertical-align: top;
`
const HealerIcon = styled.div`
position: relative;
left: -32px;
height: 64px;
width: 100%;
background: url('./assets/healericon.png') no-repeat left;
background-size: 64px;
z-index: 1;
`
const DPSIcon = styled.div`
position: relative;
right: -32px;
height: 64px;
width: 100%;
background: url('./assets/dpsicon.png') no-repeat right;
background-size: 64px;
z-index: 1;
z-index: 1;
`

const HealsSingleTargetIcon = styled.div`
position: absolute;
top: 25%;
left: -5%;
opacity: .6;
z-index: 1;
height: 48px;
width: 48px;
background: url('./assets/singletarget.png') no-repeat center;
background-size: 48px;
`
const HealsMultiTargetIcon = styled.div`
position: absolute;
bottom: 25%;
left: -5%;
opacity: .6;
z-index: 1;
height: 48px;
width: 48px;
background: url('./assets/multitarget.png') no-repeat center;
background-size: 48px;
`

const DPSSingleTargetIcon = styled.div`
position: absolute;
top: 25%;
right: -5%;
opacity: .6;
z-index: 1;
height: 48px;
width: 48px;
background: url('./assets/singletarget.png') no-repeat center;
background-size: 48px;
`
const DPSMultiTargetIcon = styled.div`
position: absolute;
bottom: 25%;
right: -32px;
opacity: .6;
z-index: 1;
height: 48px;
width: 48px;
background: url('./assets/multitarget.png') no-repeat center;
background-size: 48px;
`

class App extends Component {
  render () {
    return (

      <div className='App'>
        <GlobalStyle />
        <Header>
          <img src='./assets/sch.png' alt='logo' height='75px' />
          <h1>Scholar</h1>
          <h2>(Patch 4.4)</h2>
          <h2><a href='https://www.reddit.com/r/ffxiv/comments/9gs4sf/scholar_44_guide/'>Sovasin Kair</a></h2>
        </Header>
        <Mechanics>
          <h2>Job Mechanics</h2>
          <h3>Aetherflow
            <img src='./assets/aetherflow.png' alt='aetherflow' />
          </h3>
          <p>
              Using Aetherflow restores 10% of your MP and grants you three stacks of Aetherflow. Certain Actions will require and consume one stack. Consuming a stack reduces the cooldown of Aetherflow by five seconds. Make sure to use up your stacks in time to shorten the cooldown as much as possible.
          </p>
          <p>
              Stacks granted by Dissipation will also lower the cooldown of Aetherflow by five seconds each.
          </p>
          <h3>Faerie Gauge
            <img src='./assets/faeriegauge.png' alt='faeriegauge' />
          </h3>
          <p>
            Consuming a single stack during combat increases your Faerie Gauge by 10. Gauge is used for Fey Union, which tethers your pet to your target and applies a powerful single-target regen while active. Your pet will not be able to move or perform any actions while Fey Union is active. Fey Union requires at least 10 gauge to activate. Fey Union consumes 10 gauge every tick (3 seconds). Fey Union will end if any of the following situation occur:
          </p>
          <ol>
            <li> Your gauge reaches zero. </li>
            <li> Your Fey Union'd target moves out of range (15 yalms). If this happens, your pet will stop all actions and your gauge will stop draining. If the targetted player moves back into range, the tether wil reapper and Fey union will resume. </li>
            <li> You order your pet to use a cooldown, like Whispering Dawn. Generic pet commands such as Place, Heel, Sic etc. and Embrace will not work. </li>
            <li> Your pet dies, you die, or you use Dissipate. </li>
          </ol>
          <p> Your gauge will reset to zero if you die. However it will not reset if your pet dies or is dissipated. </p>
          <p> Aetherpact is the action performed by the Scholar on a party member, which commands your pet to use Fey Union on that player. Aetherpact has a range of 30 yalms, which means that your target must be within 30 yalms of the Scholar, not your fairy. Fey Union has a range of 15 yalms, which refers to the length of the tether. If the target is more than 15 yalms away from the pet when Aetherpact is used, your fairy will move towards the target until it is within range and then proceed to use Fey Union. </p>

        </Mechanics>
        <Container>
          {STHeals.map(({ Name, Icon, Description, Interactions }) =>
            <ActionTip
              tree='left-top'
              name={Name}
              icon={Icon}
              description={Description}
              interactions={Interactions}
              key={Name}
            />
          )}
          <HealsSingleTargetIcon />
          <HealerIcon />
          <HealsMultiTargetIcon />
          {MTHeals.map(({ Name, Icon, Description, Interactions }) =>
            <ActionTip
              tree='left-bottom'
              name={Name}
              icon={Icon}
              description={Description}
              interactions={Interactions}
              key={Name}
            />
          )}
        </Container>
        <Container>
          {STDPS.map(({ Name, Icon, Description, Interactions }) =>
            <ActionTip
              tree='right-top'
              name={Name}
              icon={Icon}
              description={Description}
              interactions={Interactions}
              key={Name}
            />
          )}
          <DPSSingleTargetIcon />
          <DPSIcon />
          <DPSMultiTargetIcon />
          {MTDPS.map(({ Name, Icon, Description, Interactions }) =>
            <ActionTip
              tree='right-bottom'
              name={Name}
              icon={Icon}
              description={Description}
              interactions={Interactions}
              key={Name}
            />
          )}
        </Container>
        <div>
          <Container>
            <h3 style={{ 'text-align': 'left' }}>SCH Misc</h3>
            {SCHMisc.map(({ Name, Icon, Description, Interactions }) =>
              <ActionTip
                name={Name}
                icon={Icon}
                description={Description}
                interactions={Interactions}
                key={Name}
              />
            )}
          </Container>
          <Container>
            <h3 style={{ 'text-align': 'right' }}>Pet Misc (SCH Actions)</h3>
            {PetMisc.map(({ Name, Icon, Description, Interactions }) =>
              <ActionTip
                name={Name}
                icon={Icon}
                description={Description}
                interactions={Interactions}
                key={Name}
                alignRight
              />
            )}
          </Container>

          <div style={{ 'text-align': 'left', 'max-width': '550px' }}>
            <p>Your pet should, in almost all situations, be set to Obey so you can use
              their abilities manually.</p>
            <p>It is also recommended to keybind your pet’s three healing/buffing
                 abilities, but their cooldowns are long enough that clicking them
                 can be viable too. You can also drag them (as well as Heel and Place)
                 to your own hotbar if you find the pet hotbar to be too clunky.</p>
          </div>
        </div>

        {/* <div>
          {skills.map((skill) => <Action name={`${skill.Icon}`} alt={skill.Name} key={skill.Name} />)}
        </div> */}
      </div>
    )
  }
}

export default App
