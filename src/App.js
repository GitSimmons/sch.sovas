import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import { Action } from './components/Action'
import { ActionTip } from './components/ActionTip'
import { Header } from './components/Header'
import { Mechanics } from './components/Mechanics'
import { GlobalStyle } from './theme/GlobalStyle'
import { schSkills } from './skills.js'

const getSkills = (array) => array.map((name) => schSkills[name])
const getActions = (array) => getSkills(array).map(({ Icon }) => <Action name={Icon} />)

const STHeals = getSkills(['Physick', 'Adloquium', 'Lustrate', 'Excogitation', 'Aetherpact (Fey Union)', 'Embrace'])
const MTHeals = getSkills(['Indomitability', 'Succor', 'Sacred Soil', 'Whispering Dawn (Eos)', 'Fey Covenant (Eos)', 'Fey Illumination (Eos)'])
const STDPS = getSkills(['Broil II', 'Miasma', 'Bio II', 'Ruin II', 'Energy Drain'])
const MTDPS = getSkills(['Miasma II', 'Shadow Flare', 'Bane'])
const SCHMisc = getSkills(['Resurrection', 'Aetherflow', 'Deployment Tactics', 'Emergency Tactics', 'Chain Stratagem'])
const PetMisc = getSkills(['Summon', 'Summon II', 'Sustain', 'Rouse', 'Dissipation', 'Dissolve Union'])
const PetActions = getSkills(['Heel', 'Place', 'Obey'])
const SeleneMisc = getSkills(['Silent Dusk', 'Fey Caress', 'Fey Wind'])

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
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'maxWidth': '1200px', 'margin': 'auto' }}>
          <div>
            <h3 style={{ 'textAlign': 'left' }}>SCH Misc</h3>
            {SCHMisc.map(({ Name, Icon, Description, Interactions }) =>
              <ActionTip
                name={Name}
                icon={Icon}
                description={Description}
                interactions={Interactions}
                key={Name}
              />
            )}
          </div>
          <div>
            <h3 style={{ 'textAlign': 'right' }}>Pet Misc (SCH Actions)</h3>
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
          </div>
        </div>
        <div style={{ 'margin': 'auto', 'display': 'flex', 'justifyContent': 'space-between', 'maxWidth': '1200px', 'flexWrap': 'wrap' }}>
          <div>
            <h3 style={{ 'textAlign': 'left' }}>Pet Actions To Keybind</h3>
            {PetActions.map(({ Name, Icon, Description, Interactions }) =>
              <ActionTip
                name={Name}
                icon={Icon}
                description={Description}
                interactions={Interactions}
                key={Name}
              />
            )}
            <div style={{ 'textAlign': 'left', 'maxWidth': '550px' }}>
              <p>Your pet should, in almost all situations, be set to Obey so you can use
              their abilities manually.</p>
              <p>It is also recommended to keybind your pet’s three healing/buffing
                 abilities, but their cooldowns are long enough that clicking them
                 can be viable too. You can also drag them (as well as Heel and Place)
                 to your own hotbar if you find the pet hotbar to be too clunky.</p>
            </div>
          </div>
          <div>
            <h3 style={{ 'textAlign': 'right' }}>Selene Misc</h3>
            {SeleneMisc.map(({ Name, Icon, Description, Interactions }) =>
              <ActionTip
                name={Name}
                icon={Icon}
                description={Description}
                interactions={Interactions}
                key={Name}
                alignRight
              />
            )}
          </div>
        </div>
        <div style={{ 'display': 'flex' }}>
          <Container>
            <h2>Role Actions</h2>
            <div style={{ 'display': 'flex', 'flexDirection': 'row', 'maxWidth': '1200px', 'margin': 'auto', 'justifyContent': 'space-between' }}>
              <div>
                <h3>Essential</h3>
                {getSkills(['Lucid Dreaming', 'Swiftcast']).map(({ Name, Icon, Description, Interactions, Note }) =>
                  <ActionTip
                    name={Name}
                    icon={Icon}
                    description={Description}
                    interactions={Interactions}
                    note={Note}
                    key={Name}
                  />
                )}
              </div>
              <div>
                <h3>Useful</h3>
                {getSkills(['Protect', 'Esuna', 'Surecast', 'Largesse']).map(({ Name, Icon, Description, Interactions, Note }) =>
                  <ActionTip
                    name={Name}
                    icon={Icon}
                    description={Description}
                    interactions={Interactions}
                    note={Note}
                    key={Name}
                  />
                )}
              </div>
              <div>
                <h3>Situational</h3>
                {getSkills(['Cleric Stance', 'Break', 'Rescue', 'Eye for an Eye']).map(({ Name, Icon, Description, Interactions, Note }) =>
                  <ActionTip
                    name={Name}
                    icon={Icon}
                    description={Description}
                    interactions={Interactions}
                    note={Note}
                    key={Name}
                  />
                )}

              </div>
            </div>
          </Container>
        </div>
        <Mechanics>
          <h2>Decision Making</h2>
          <p>As a Scholar, your oGCD heals are much more powerful than your GCD heals and should
             be used as much as possible. Most damage in this game will require you to use a cooldown
              or more to deal with, rather than simply spamming one healing ability.
              Thus, there is no simple “healing rotation” that you can use to heal all forms of damage.
            Here are a list of scenarios and possible responses to help you use your kit more efficiently.</p>
          <h3>Single Target</h3>
          <h4>Lethal tankbuster followed by autos</h4>
          {getActions(['Excogitation'])}
          <p>Use Excogitation on him before the tankbuster. </p>
          <h4>LETHAL TANKBUSTER FOLLOWED BY AUTOS</h4>
          {getActions(['Adloquium', 'Excogitation', 'Lustrate'])}
          <p>Adloquium followed by Excogitation before the tankbuster.
            If in doubt, Lustrate the tank to ensure he stays alive.</p>
          <h4>TANKBUSTER WITH NO FOLLOWUP DAMAGE (E.G. PALADIN COVERING MAIN TANK)</h4>
          {getActions(['Embrace', 'Rouse', 'Aetherpact (Fey Union)'])}
          <p>Let your fairy take care of it with Embrace. Rouse or Fey Union also works if you want to top him off quickly and your gauge is full.</p>
          <h4>HARD-HITTING AUTOS</h4>
          {getActions(['Rouse', 'Aetherpact (Fey Union)', 'Embrace'])}
          <p>Rouse. If Rouse if on cooldown, use Fey Union. Manual Embrace if possible.</p>
          <h4>PLAYER IS ABOUT TO DIE AND EXCOGITATION IS ON COOLDOWN OR NEEDED LATER</h4>
          {getActions(['Lustrate'])}
          <p>Lustrate</p>
          <h4>HEAVY DAMAGE-OVER-TIME EFFECT ON A PLAYER</h4>
          {getActions(['Adloquium'])}
          <p>Fey Union with additional Adloquiums if needed.</p>
          <h4>EMERGENCY HEALING (NO COOLDOWNS)</h4>
          {getActions(['Adloquium', 'Physick', 'Dissipation', 'Lustrate', 'Emergency Tactics'])}
          <p>Adloquium followed by Physick. Repeat until you are no longer panicking.
            Do not spam Adloquium as the second Adloquium will land before the shield from the
            first Adloquium has registered due to shield delay, causing you to waste that shield.
            Dissipation is also an option in an emergency, both for the healing buff and the
            extra Aetherflow. If a mechanic requires you to top off a single player quickly,
            you might want to Lustrate him or even use Emergency Tactics with Adloquium
            (such as in Shinryu EX).</p>
          <h3>MULTI TARGET / RAIDWIDE</h3>
          <h4>NON-LETHAL RAIDWIDE DAMAGE</h4>
          {getActions(['Whispering Dawn (Eos)'])}
          <p>Whispering Dawn to regen the party up to full.</p>
          <h4>LETHAL RAIDWIDE DAMAGE</h4>
          {getActions(['Adloquium', 'Deployment Tactics', 'Sacred Soil', 'Whispering Dawn (Eos)'])}
          <p>Spread an Adloquium using Deployment Tactics, followed by Whispering Dawn. Use Sacred Soil if insufficient.
            You may Succor instead of spreading Adloquium if you want to save Deployment Tactics for later,
            but this would cost more mana and shield for less. </p>
          <h4>TWO INSTANCES OF RAIDWIDE DAMAGE IN QUICK SUCCESSION</h4>
          {getActions(['Indomitability', 'Whispering Dawn (Eos)', 'Succor', 'Deployment Tactics', 'Fey Covenant (Eos)'])}

          <p>Indomitability after the first one, and use Whispering Dawn to regen the party up after the second one.
            If the damage is lethal, use Succor before the first one and use the Deploy Succor trick to shield the
            second one as well (adding in Indomitability if needed). Fey Covenant is also a good option to soften each
            blow, especially if they are lethal.</p>
          <h4>THREE INSTANCES OF RAIDWIDE DAMAGE IN QUICK SUCCESSION</h4>
          {getActions(['Succor', 'Deployment Tactics', 'Sacred Soil', 'Indomitability', 'Fey Covenant (Eos)', 'Whispering Dawn (Eos)', 'Fey Illumination (Eos)', 'Emergency Tactics'])}
          <p>Succor after the first one and use the Deploy Succor trick after the second one to shield the third one. Use Indomitability in between if necessary. Sacred Soil might be required if the total amount of damage received exceeds the amount healed by a single Indomitability (depends on your gear). Emergency Tactics followed by Succor may also be needed for extremely heavy damage. Fey Illumination can also be useful to help you and your cohealer heal for more. Fey Covenant is also a good option to soften each blow, especially if they are lethal.
          </p>

          <h4>PANIC AOE HEALING WITH NO AETHERFLOW
          </h4>
          {getActions(['Succor', 'Emergency Tactics', 'Succor', 'Dissipation', 'Indomitability'])}
          <p>Succor followed by an Emergency Tactics Succor followed by another Succor. If this is insufficient, Dissipate your fairy and use Indomitability. Do not spam Succors back to back as the second Succor will land before the shield from the first Succor has registered, causing you to waste that shield. Succor is also a very MP-inefficient form of AoE healing.
          </p>
          <h4>FORCED TOP-UP / OVERHEAL (WHITE HOLE, HEARTLESS ARCHANGEL)</h4>
          {getActions(['Emergency Tactics', 'Succor', 'Indomitability', 'Largesse', 'Fey Illumination (Eos)'])}
          <p>Scholars are weak at pumping out sustained pure AoE healing, but you can use Emergency Tactics followed by Succor and Indomitability to help top up your party quickly. Largesse and Fey Illumination are recommended. I would not recommend using Whispering Dawn here as these mechanics often require the party to be healed up within a few seconds, which is at most one to two ticks of Whispering Dawn. It can be useful to heal up any stragglers at 99% HP, but I would rather save it for when the party needs to be healed up over a longer period. Note that some mechanics, such as Heartless Angel, will dispel any regens on the party including Whispering Dawn.
          </p>
          <h4>RAIDWIDE DAMAGE OVER TIME (ALMAGEST)
          </h4>
          {getActions(['Fey Covenant (Eos)', 'Sacred Soil'])}
          <p>Mitigation present when the DoT hits will be snapshotted, causing each tick of the DoT to be weaker. To deal with heavy raidwide DoTs it is a good idea to stack partywide mitigation such as Sacred Soil and Fey Covenant beforehand. Coordinate with your party to ensure maximum mitigation.
          </p>
          <h4>MULTI-TARGET CLEANSABLE DEBUFF / DAMAGE-OVER-TIME (RATHALOS EX)
          </h4>
          {getActions(['Fey Caress'])}
          <p>In scenarios where you have to quickly cleanse debuffs off multiple people, you could switch to Selene and use Fey Caress to immediately cleanse party members near her. One example is the fire DoT in the second phase of Rathalos EX.
          </p>
        </Mechanics>
        {/* <div>
          {skills.map((skill) => <Action name={`${skill.Icon}`} alt={skill.Name} key={skill.Name} />)}
        </div> */}
      </div>
    )
  }
}

export default App
