import React, { Component } from 'react'
import styled from 'styled-components'

import { Actions } from './components/Actions'
import { ActionTips } from './components/ActionTips'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import * as Icon from './components/ClassIcons'
import { JobSkills } from './components/JobSkills'
import { RoleActions } from './components/RoleActions'
import { Section } from './components/Section'
import { GlobalStyle } from './theme/GlobalStyle'
import { Playground } from './components/contentful'

/* eslint-disable import/no-webpack-loader-syntax */
import JobMechanics from '!babel-loader!mdx-loader!./mdx/JobMechanics.mdx'
import MechanicalQuirks from '!babel-loader!mdx-loader!./mdx/MechanicalQuirks.mdx'
import Opener from '!babel-loader!mdx-loader!./mdx/Opener.mdx'

const Container = styled.div`
display: inline-block;
position: relative; 
margin: auto;
${''}
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
left: -48px;
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
left: -58px;
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
right: -48px;
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
right: -58px;
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
          <Icon.SCH width='100px' height='100px' />
          <h1>Scholar</h1>
          <h4>(Patch 4.4)</h4>
          <h4><a href='https://www.reddit.com/r/ffxiv/comments/9gs4sf/scholar_44_guide/'>Sovasin Kair</a></h4>
        </Header>
        <Section>
          <Playground />
          <JobMechanics />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Container>
              <ActionTips actions={['Physick', 'Adloquium', 'Lustrate', 'Excogitation', 'Aetherpact (Fey Union)', 'Embrace']} tree='left-top' />
              <HealsSingleTargetIcon />
              <HealerIcon />
              <HealsMultiTargetIcon />
              <ActionTips actions={['Indomitability', 'Succor', 'Sacred Soil', 'Whispering Dawn (Eos)', 'Fey Covenant (Eos)', 'Fey Illumination (Eos)']} tree='left-bottom' />
            </Container>
            <Container>
              <ActionTips actions={['Broil II', 'Miasma', 'Bio II', 'Ruin II', 'Energy Drain']} tree='right-top' />
              <DPSSingleTargetIcon />
              <DPSIcon />
              <DPSMultiTargetIcon />
              <ActionTips actions={['Miasma II', 'Shadow Flare', 'Bane']} tree='right-bottom' />
            </Container>
          </div>
          <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'maxWidth': '1400px', 'margin': 'auto', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ 'textAlign': 'left' }}>SCH Misc</h3>
              <ActionTips actions={['Resurrection', 'Aetherflow', 'Deployment Tactics', 'Emergency Tactics', 'Chain Stratagem']} />
            </div>
            <div>
              <h3 style={{ 'textAlign': 'right' }}>Pet Misc (SCH Actions)</h3>
              <ActionTips actions={['Summon', 'Summon II', 'Sustain', 'Rouse', 'Dissipation', 'Dissolve Union']} alignRight />
            </div>
          </div>
          <div style={{ 'margin': 'auto', 'display': 'flex', 'justifyContent': 'space-between', 'maxWidth': '1400px', 'flexWrap': 'wrap' }}>
            <div>
              <h3 style={{ 'textAlign': 'left' }}>Pet Actions To Keybind</h3>
              <ActionTips actions={['Heel', 'Place', 'Obey']} />
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
              <h3 style={{ 'textAlign': 'right', 'maxWidth': '550px' }}>Selene Misc</h3>
              <ActionTips actions={['Silent Dusk', 'Fey Caress', 'Fey Wind']} alignRight />
            </div>
          </div>
          <RoleActions />
        </Section>
        <Section>
          <Opener />
        </Section>
        <Section>
          <MechanicalQuirks />
        </Section>
        <Section>
          <h2>Decision Making</h2>
          <p>As a Scholar, your oGCD heals are much more powerful than your GCD heals and should
             be used as much as possible. Most damage in this game will require you to use a cooldown
              or more to deal with, rather than simply spamming one healing ability.
              Thus, there is no simple “healing rotation” that you can use to heal all forms of damage.
            Here are a list of scenarios and possible responses to help you use your kit more efficiently.</p>
          <h3>Single Target</h3>
          <h4>Lethal tankbuster followed by autos</h4>
          <Actions actions={['Excogitation']} />
          <p>Use Excogitation on him before the tankbuster. </p>
          <h4>LETHAL TANKBUSTER FOLLOWED BY AUTOS</h4>
          <Actions actions={['Adloquium', 'Excogitation', 'Lustrate']} />
          <p>Adloquium followed by Excogitation before the tankbuster.
            If in doubt, Lustrate the tank to ensure he stays alive.</p>
          <h4>TANKBUSTER WITH NO FOLLOWUP DAMAGE (E.G. PALADIN COVERING MAIN TANK)</h4>
          <Actions actions={['Embrace', 'Rouse', 'Aetherpact (Fey Union)']} />
          <p>Let your fairy take care of it with Embrace. Rouse or Fey Union also works if you want to top him off quickly and your gauge is full.</p>
          <h4>HARD-HITTING AUTOS</h4>
          <Actions actions={['Rouse', 'Aetherpact (Fey Union)', 'Embrace']} />
          <p>Rouse. If Rouse is on cooldown, use Fey Union. Manual Embrace if possible.</p>
          <h4>PLAYER IS ABOUT TO DIE AND EXCOGITATION IS ON COOLDOWN OR NEEDED LATER</h4>
          <Actions actions={['Lustrate']} />
          <p>Lustrate</p>
          <h4>HEAVY DAMAGE-OVER-TIME EFFECT ON A PLAYER</h4>
          <Actions actions={['Adloquium']} />
          <p>Fey Union with additional Adloquiums if needed.</p>
          <h4>EMERGENCY HEALING (NO COOLDOWNS)</h4>
          <Actions actions={['Adloquium', 'Physick', 'Dissipation', 'Lustrate', 'Emergency Tactics']} />
          <p>Adloquium followed by Physick. Repeat until you are no longer panicking.
            Do not spam Adloquium as the second Adloquium will land before the shield from the
            first Adloquium has registered due to shield delay, causing you to waste that shield.
            Dissipation is also an option in an emergency, both for the healing buff and the
            extra Aetherflow. If a mechanic requires you to top off a single player quickly,
            you might want to Lustrate him or even use Emergency Tactics with Adloquium
            (such as in Shinryu EX).</p>
          <h3>MULTI TARGET / RAIDWIDE</h3>
          <h4>NON-LETHAL RAIDWIDE DAMAGE</h4>
          <Actions actions={['Whispering Dawn (Eos)']} />
          <p>Whispering Dawn to regen the party up to full.</p>
          <h4>LETHAL RAIDWIDE DAMAGE</h4>
          <Actions actions={['Adloquium', 'Deployment Tactics', 'Sacred Soil', 'Whispering Dawn (Eos)']} />
          <p>Spread an Adloquium using Deployment Tactics, followed by Whispering Dawn. Use Sacred Soil if insufficient.
            You may Succor instead of spreading Adloquium if you want to save Deployment Tactics for later,
            but this would cost more mana and shield for less. </p>
          <h4>TWO INSTANCES OF RAIDWIDE DAMAGE IN QUICK SUCCESSION</h4>
          <Actions actions={['Indomitability', 'Whispering Dawn (Eos)', 'Succor', 'Deployment Tactics', 'Fey Covenant (Eos)']} />

          <p>Indomitability after the first one, and use Whispering Dawn to regen the party up after the second one.
            If the damage is lethal, use Succor before the first one and use the Deploy Succor trick to shield the
            second one as well (adding in Indomitability if needed). Fey Covenant is also a good option to soften each
            blow, especially if they are lethal.</p>
          <h4>THREE INSTANCES OF RAIDWIDE DAMAGE IN QUICK SUCCESSION</h4>
          <Actions actions={['Succor', 'Deployment Tactics', 'Sacred Soil', 'Indomitability', 'Fey Covenant (Eos)', 'Whispering Dawn (Eos)', 'Fey Illumination (Eos)', 'Emergency Tactics']} />
          <p>Succor after the first one and use the Deploy Succor trick after the second one to shield the third one. Use Indomitability in between if necessary. Sacred Soil might be required if the total amount of damage received exceeds the amount healed by a single Indomitability (depends on your gear). Emergency Tactics followed by Succor may also be needed for extremely heavy damage. Fey Illumination can also be useful to help you and your cohealer heal for more. Fey Covenant is also a good option to soften each blow, especially if they are lethal.
          </p>

          <h4>PANIC AOE HEALING WITH NO AETHERFLOW
          </h4>
          <Actions actions={['Succor', 'Emergency Tactics', 'Succor', 'Dissipation', 'Indomitability']} />
          <p>Succor followed by an Emergency Tactics Succor followed by another Succor. If this is insufficient, Dissipate your fairy and use Indomitability. Do not spam Succors back to back as the second Succor will land before the shield from the first Succor has registered, causing you to waste that shield. Succor is also a very MP-inefficient form of AoE healing.
          </p>
          <h4>FORCED TOP-UP / OVERHEAL (WHITE HOLE, HEARTLESS ARCHANGEL)</h4>
          <Actions actions={['Emergency Tactics', 'Succor', 'Indomitability', 'Largesse', 'Fey Illumination (Eos)']} />
          <p>Scholars are weak at pumping out sustained pure AoE healing, but you can use Emergency Tactics followed by Succor and Indomitability to help top up your party quickly. Largesse and Fey Illumination are recommended. I would not recommend using Whispering Dawn here as these mechanics often require the party to be healed up within a few seconds, which is at most one to two ticks of Whispering Dawn. It can be useful to heal up any stragglers at 99% HP, but I would rather save it for when the party needs to be healed up over a longer period. Note that some mechanics, such as Heartless Angel, will dispel any regens on the party including Whispering Dawn.
          </p>
          <h4>RAIDWIDE DAMAGE OVER TIME (ALMAGEST)
          </h4>
          <Actions actions={['Fey Covenant (Eos)', 'Sacred Soil']} />
          <p>Mitigation present when the DoT hits will be snapshotted, causing each tick of the DoT to be weaker. To deal with heavy raidwide DoTs it is a good idea to stack partywide mitigation such as Sacred Soil and Fey Covenant beforehand. Coordinate with your party to ensure maximum mitigation.
          </p>
          <h4>MULTI-TARGET CLEANSABLE DEBUFF / DAMAGE-OVER-TIME (RATHALOS EX)
          </h4>
          <Actions actions={['Fey Caress']} />
          <p>In scenarios where you have to quickly cleanse debuffs off multiple people, you could switch to Selene and use Fey Caress to immediately cleanse party members near her. One example is the fire DoT in the second phase of Rathalos EX.
          </p>
        </Section>

        <Section>
          <h2>Party Abilities</h2>
          <p>Healing is a group effort, and there are various abilities your party members can use to contribute to mitigation and healing. This guide will not go into in-depth detail into exactly how the other jobs work, but will instead focus on abilities that may cause a change in your playstyle when used.</p>

          <h3>Co-healer</h3>
          <JobSkills job='whm' actions={['Benediction', 'Divine Benison', 'Plenary Indulgence']} />
          <JobSkills actions={['Essential Dignity', 'Earthly Star', 'Collective Unconscious']} job='ast' />

          <h3>Tanks</h3>
          <JobSkills actions={['Divine Veil', 'Intervention', 'Cover', 'Hallowed Ground']} job='pld' />
          <JobSkills actions={['Shake it Off', 'Holmgang']} job='war' />
          <JobSkills actions={['The Blackest Night', 'Living Dead']} job='drk' />
          <JobSkills actions={['Convalescence', 'Reprisal']} job='tank' />

          <h3>Melee DPS</h3>
          <JobSkills actions={['Mantra']} job='mnk' />
          <JobSkills actions={['Blood for Blood', 'Battle Litany']} job='drg' />
          <JobSkills actions={['Smoke Screen', 'Trick Attack']} job='nin' />
          <JobSkills actions={['Feint']} job='melee' />

          <h3>Ranged DPS</h3>
          <JobSkills actions={[`Nature's Minne`, 'Troubadour']} job='brd' />
          <JobSkills actions={['Dismantle']} job='mch' />
          <JobSkills actions={['Refresh', 'Palisade']} job='ranged' />

          <h3>Caster DPS</h3>
          <JobSkills actions={['Devotion', 'Resurrection']} job='smn' />
          <JobSkills actions={['Verraise']} job='rdm' />
          <JobSkills actions={['Addle', 'Apocatastasis', 'Mana Shift']} job='caster' />
        </Section>
        <Footer>
          <p>This guide underwent many revisions based on feedback from The Balance and Reddit, for which I am deeply grateful.</p>
          <p>Please contact me at sovasin#3308 or <a href='http://reddit.com/u/sovasin_kair'>/u/sovasin_kair</a> if you spot any mistakes or have feedback.</p>
          <p>Thank you for reading. See you in Alphascape!</p>
          <p>Web Version by <a href='https://github.com/GitSimmons/sch.sovas'>Ben Simmons</a></p>
        </Footer>
      </div>
    )
  }
}

export default App
