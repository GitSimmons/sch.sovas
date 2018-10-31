const schSkills = [
  {
    'Icon': '/i/000000/000510.png',
    'Name': 'Aetherflow',
    'Description': [
      'Grants 3 stacks of Aetherflow',
      'Restores 10% of max MP',
      'Recast 60.0 (45.0 due to Quickened Aetherflow) (oGCD)'
    ]
  },
  {
    'Icon': '/i/002000/002802.png',
    'Name': 'Succor',
    'Description': [
      'Potency 150 (+225)',
      'MP 2040',
      'Cast 2.5 (GCD)',
      'Radius 15.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/002000/002809.png',
        'Name': 'Emergency Tactics'
      },
      {
        'Icon': '/i/000000/000888.png',
        'Name': 'Largesse'
      },
      {
        'Icon': '/i/002000/002810.png',
        'Name': 'Dissipation'
      },
      {
        'Icon': '/i/002000/002829.png',
        'Name': 'Fey Illumination (Eos)'
      },
      {
        'Icon': '/i/002000/002808.png',
        'Name': 'Deployment Tactics'
      }
    ]
  },
  {
    'Icon': '/i/000000/000507.png',
    'Name': 'Bane',
    'Description': [
      'Spreads DOTs',
      'Potency 100%/80%/60%/20%',
      '15% DOT duration refresh proc',
      'MP 0',
      'Recast 10.0 (oGCD)',
      'Radius 8.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000510.png',
        'Name': 'Aetherflow'
      },
      {
        'Icon': '/i/000000/000505.png',
        'Name': 'Miasma'
      },
      {
        'Icon': '/i/000000/000504.png',
        'Name': 'Bio II'
      }

    ]
  },
  {
    'Icon': '/i/000000/000865.png',
    'Name': 'Lucid Dreaming',
    'Description': [
      '80 POTENCY (960 MP) REFRESH / TICK',
      'REDUCES ENMITY BY HALF',
      'DURATION 21.0',
      'RECAST 120.0 (oGCD)'
    ],
    'Note': `As a SCH you should not have aggro issues, so use this whenever you are 
    dipping below 70% MP, or when you are spamming MP-intensive actions such as 
    Miasma II. It restores a total of 6720 MP over the entire duration.`
  },
  {
    'Icon': '/i/000000/000405.png',
    'Name': ''
  },
  {
    'Icon': '/i/002000/002813.png',
    'Name': 'Excogitation',
    'Description': [
      'Potency 800',
      '(Triggers when HP < 50% or upon expiration)',
      'MP 0',
      'Duration 45.0',
      'Recast 45.0 (oGCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000510.png',
        'Name': 'Aetherflow'
      }
    ]
  },
  {
    'Icon': '/i/000000/000515.png',
    'Name': 'Shadow Flare',
    'Description': [
      `POTENCY 50 / TICK`,
      `SLOW 5%`,
      `DURATION 15.0`,
      `MP 0`,
      `RECAST 60.0`,
      `RADIUS 5.0`
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000510.png',
        'Name': 'Aetherflow'
      },
      {
        'Icon': '/i/002000/002804.png',
        'Name': 'Sacred Soil'
      }
    ]
  },
  {
    'Icon': '/i/002000/002809.png',
    'Name': 'Emergency Tactics',
    'Description': [
      'TRANSFORMS NEXT GALVANISE INTO HP RECOVERY',
      'MP 0',
      'DURATION 15.0',
      'RECAST 20.0 (oGCD)'
    ]
  },
  {
    'Icon': '/i/002000/002801.png',
    'Name': 'Adloquium',
    'Description': [
      'Potency 300 (+300 // +600 crit)',
      'MP 1560',
      'Cast 2.0 (GCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/002000/002809.png',
        'Name': 'Emergency Tactics'
      },
      {
        'Icon': '/i/000000/000888.png',
        'Name': 'Largesse'
      },
      {
        'Icon': '/i/002000/002810.png',
        'Name': 'Dissipation'
      },
      {
        'Icon': '/i/002000/002829.png',
        'Name': 'Fey Illumination (Eos)'
      },
      {
        'Icon': '/i/002000/002808.png',
        'Name': 'Deployment Tactics'
      }
    ]
  },
  {
    'Icon': '/i/002000/002806.png',
    'Name': 'Indomitability',
    'Description': [
      'Potency 500',
      'MP 0',
      'Recast 30.0 (oGCD)',
      'Radius 15.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000510.png',
        'Name': 'Aetherflow'
      }
    ]
  },
  {
    'Icon': '/i/000000/000514.png',
    'Name': 'Energy Drain',
    'Description': [
      'POTENCY 150',
      'ABSORBS PORTION OF DAMAGE AS HP',
      'MP 0 (+1200)',
      'RECAST 3.0 (oGCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000881.png',
        'Name': 'Cleric Stance'
      },
      {
        'Icon': '/i/000000/000510.png',
        'Name': 'Aetherflow'
      }
    ]
  },
  {
    'Icon': '/i/000000/000888.png',
    'Name': 'Largesse',
    'Description': [
      'INCREASES HEALING POTENCY BY 20%',
      'DURATION 20.0',
      'RECAST 90.0 (oGCD)'
    ],
    'Note': `Not too useful for Scholar as it, as well as other healing
     buffs/debuffs such as Fey Illumination, only affects spells and not abilities. 
     It can be useful in healing-intensive fights such as Ultimate where Succor 
     spamming might be required.`
  },
  {
    'Icon': '/i/002000/002837.png',
    'Name': 'Silent Dusk',
    'Description': [
      'SILENCES TARGET',
      'DURATION 1.0',
      'RECAST 40.0'
    ]
  },
  {
    'Icon': '/i/002000/002810.png',
    'Name': 'Dissipation',
    'Description': [
      'KILLS PET IN EXCHANGE FOR FULL AETHERFLOW',
      '20% HEALING BUFF',
      'UNABLE TO RESUMMON PET UNTIL DEBUFF EXPIRES',
      'DURATION 30.0',
      'MP 0',
      'RECAST 180.0 (oGCD)'
    ]
  },
  {
    'Icon': '/i/000000/000884.png',
    'Name': 'Esuna',
    'Description': [
      'CLEANSES ONE DEBUFF FROM TARGET',
      'MP 600',
      'CAST 1.0 (GCD)'
    ],
    'Note': `Fight-dependent. Sigmascape (Savage) currently does not require Esuna. You can heal through the passenger car phase in O5S with Fey Union alone.`
  },
  {
    'Icon': '/i/002000/002838.png',
    'Name': 'Fey Glow'
  },
  {
    'Icon': '/i/002000/002812.png',
    'Name': 'Fey Wind',
    'Description': [
      'REDUCES AUTO-ATTACK / CAST / RECAST BY 3%',
      'DURATION 30.0',
      'RECAST 60.0',
      'RADIUS 20.0'
    ]
  },
  {
    'Icon': '/i/002000/002815.png',
    'Name': 'Chain Stratagem',
    'Description': [
      '15% CRIT CHANCE INCREASE ON TARGET',
      'MP 0',
      'DURATION 15.0',
      'RECAST 120.0 (oGCD)'
    ]
  },
  // {
  //   'Icon': '/i/002000/002836.png',
  //   'Name': 'Embrace'
  // },
  {
    'Icon': '/i/000000/000516.png',
    'Name': 'Summon',
    'Description': [
      'Summons Eos',
      'MP 1200',
      'CAST 3.0 (GCD)'
    ]
  },
  {
    'Icon': '/i/002000/002818.png',
    'Name': 'Fey Union'
  },
  {
    'Icon': '/i/002000/002828.png',
    'Name': 'Fey Covenant (Eos)',
    'Description': [
      '20% M.DEF increase',
      'Duration 20.0',
      'Recast 120.0',
      'Radius 15.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000516.png',
        'Name': 'Summon'
      }
    ]
  },
  {
    'Icon': '/i/002000/002814.png',
    'Name': 'Broil II',
    'Description': [
      'POTENCY 230',
      'MP 720',
      'CAST 2.5 (GCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000881.png',
        'Name': 'Cleric Stance'
      }
    ]
  },
  {
    'Icon': '/i/000000/000881.png',
    'Name': 'Cleric Stance',
    'Description': [
      'INCREASES DAMAGE BY 5%',
      'DURATION 15.0',
      'RECAST 90.0 (oGCD)'
    ],
    'Note': `A minor DPS boost. Can be somewhat useful in a coordinated meta 
    composition that can line up raid buffs. Take it when you’re farming a fight.`
  },
  {
    'Icon': '/i/002000/002816.png',
    'Name': 'Aetherpact (Fey Union)',
    'Description': [
      'Potency 480 / tick (before pet scaling)',
      'Gauge 10/tick',
      'Recast 3.0 (oGCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000516.png',
        'Name': 'Summon'
      },
      {
        'Icon': '/i/000000/000509.png',
        'Name': 'Rouse'
      }
    ]
  },
  {
    'Icon': '/i/000000/000508.png',
    'Name': 'Sustain',
    'Description': [
      '8% PET HP REGEN / TICK',
      'MP 600',
      'CAST 1.0 (GCD'
    ]
  },
  {
    'Icon': '/i/000000/000883.png',
    'Name': 'Protect',
    'Description': [
      'INCREASES P.DEF / M.DEF IN AOE',
      'DURATION 30M',
      'CAST 3.0 (GCD)'
    ],
    'Note': `Increases magical and physical defense by 20%. Protect does not 
    persist through death, so during raids at least one healer should have 
    Protect equipped to cast on players after resurrecting them.`
  },
  {
    'Icon': '/i/002000/002817.png',
    'Name': 'Dissolve Union',
    'Description': [
      'MP 0',
      'CAST 1.0 (oGCD)'
    ]
  },
  {
    'Icon': '/i/000000/000505.png',
    'Name': 'Miasma',
    'Description': [
      'POTENCY 20 (+35 / TICK DOT)',
      ' DURATION 24.0',
      ' MP 600',
      ' CAST 2.5 (GCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000881.png',
        'Name': 'Cleric Stance'
      },
      {
        'Icon': '/i/000000/000507.png',
        'Name': 'Bane'
      }
    ]
  },
  {
    'Icon': '/i/002000/002829.png',
    'Name': 'Fey Illumination (Eos)',
    'Description': [
      '10% Aoe healing increase',
      'duration 20.0',
      'radius 15.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000516.png',
        'Name': 'Summon'
      }
    ]
  },
  {
    'Icon': '/i/000000/000869.png',
    'Name': 'Surecast',
    'Description': [
      'NEXT SPELL IS CAST WITHOUT INTERRUPTION',
      'NULLIFIES KNOCKBACK/DRAW-IN EFFECTS',
      'DURATION 5.0',
      'RECAST 30.0 (oGCD)'
    ],
    'Note': `Fight-dependent. Commonly used in O5S, O7S and O8S to nullify the knockbacks.`
  },
  {
    'Icon': '/i/002000/002807.png',
    'Name': 'Broil',
    'Interactions': [
      {
        'Icon': '/i/000000/000881.png',
        'Name': 'Cleric Stance'
      }
    ]
  },
  {
    'Icon': '/i/002000/002839.png',
    'Name': 'Fey Light (Selene)'
  },
  {
    'Icon': '/i/002000/002826.png',
    'Name': 'Embrace',
    'Description': [
      'Potency 250 (Before pet scaling)',
      'Cast 2.0',
      'Recast 3.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000516.png',
        'Name': 'Summon'
      },
      {
        'Icon': '/i/002000/002829.png',
        'Name': 'Fey Illumination (Eos)'
      },
      {
        'Icon': '/i/000000/000509.png',
        'Name': 'Rouse'
      }
    ]
  },
  {
    'Icon': '/i/000000/000509.png',
    'Name': 'Rouse',
    'Description': [
      'PET 40% HEALING BUFF',
      'PET IMMUNE TO CC',
      'DURATION 20.0',
      'MP 0',
      'RECAST 60.0 (oGCD)'
    ]
  },
  {
    'Icon': '/i/000000/000887.png',
    'Name': 'Eye for an Eye',
    'Description': [
      '20% CHANCE TO PROC ON HIT',
      'PROCS 10% DAMAGE DOWN',
      'E4E DURATION 20.0',
      'DAMAGE DOWN DURATION 10.0',
      'RECAST 180.0 (oGCD)'
    ],
    'Note': `Places a buff on your target that lasts 20 seconds. While this buff
     is active, every time the target is hit there is a 20% chance that it procs 
     and afflicts the attacker with a 10% damage down debuff.
     Can be spread using Deployment Tactics. It can only be proc’d by physical attacks, 
     but the debuff mitigates physical and magical damage. Not commonly used due to 
      its reliance on RNG.`
  },
  {
    'Icon': '/i/000000/000501.png',
    'Name': 'Ruin'
  },
  {
    'Icon': '/i/002000/002827.png',
    'Name': 'Whispering Dawn (Eos)',
    'Description': [
      'POTENCY 120/TICK (BEFORE PET SCALING)',
      'DURATION 21.0',
      'RECAST 60.0',
      'RADIUS 15.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000516.png',
        'Name': 'Summon'
      }
    ]
  },
  {
    'Icon': '/i/000000/000502.png',
    'Name': 'Ruin II',
    'Description': [
      'POTENCY 100',
      'MP 480',
      'CAST 0.0 (GCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000881.png',
        'Name': 'Cleric Stance'
      }
    ]
  },
  {
    'Icon': '/i/000000/000506.png',
    'Name': 'Miasma II',
    'Description': [
      'POTENCY 100 (+25 / TICK DOT)',
      'DURATION 12.0',
      'MP 1680',
      'CAST 0.0 (GCD)',
      'RADIUS 5.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000881.png',
        'Name': 'Cleric Stance'
      }
    ]
  },
  {
    'Icon': '/i/002000/002804.png',
    'Name': 'Sacred Soil',
    'Description': [
      '10% Damage Reduction',
      '20% Free succor proc',
      'MP 0',
      'Duration 15.0',
      'Recast 30.0 (oGCD)',
      'Radius 8.0'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000510.png',
        'Name': 'Aetherflow'
      },
      {
        'Icon': '/i/000000/000515.png',
        'Name': 'Shadow Flare'
      }
    ]
  },
  {
    'Icon': '/i/000000/000511.png',
    'Name': 'Resurrection',
    'Description': [
      'RAISES DOWNED PLAYER (INFLICTS WEAKNESS)',
      'MP 3600',
      'CAST 8.0 (GCD)'
    ]
  },
  {
    'Icon': '/i/000000/000518.png',
    'Name': 'Physick',
    'Description': [
      'Potency 400',
      'MP 600',
      'Cast 2.0 (GCD)'],
    'Interactions': [
      {
        'Icon': '/i/002000/002810.png',
        'Name': 'Dissipation'
      },
      {
        'Icon': '/i/000000/000888.png',
        'Name': 'Largesse'
      },
      {
        'Icon': '/i/002000/002829.png',
        'Name': 'Fey Illumination'
      }
    ]
  },
  {
    'Icon': '/i/000000/000866.png',
    'Name': 'Swiftcast',
    'Description': [
      'NEXT SPELL IS CAST IMMEDIATELY',
      'DURATION 10.0',
      'RECAST 60.0 (oGCD)'
    ],
    'Note': `This is usually used to instantly Resurrect a dead player. 
    You can also swiftcast Broil IIs or Succors to squeeze in extra oGCDs.`
  },
  {
    'Icon': '/i/000000/000890.png',
    'Name': 'Rescue',
    'Description': [
      'PULLS TARGETED ALLY TOWARDS YOU',
      'DOES NOT AFFECT CC’D ALLIES',
      'RECAST 150.0',
      'RANGE 30.0'
    ],
    'Note': `Some speedrunning strats make use of Rescue.
     It can also be used on players who are animation-locked after a Limit Break.
      This will end the animation lock and allow them to start moving around - 
      however, they will not be able to perform actions until the moment the 
      animation lock was supposed to end. This ability is too laggy to be used on 
      someone failing a mechanic.`
  },
  {
    'Icon': '/i/000000/000504.png',
    'Name': 'Bio II',
    'Description': [
      'POTENCY 35 / TICK',
      'DURATION 30.0',
      'MP 720',
      'CAST 0.0 (GCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000881.png',
        'Name': 'Cleric Stance'
      },
      {
        'Icon': '/i/000000/000507.png',
        'Name': 'Bane'
      }
    ]
  },
  {
    'Icon': '/i/000000/000517.png',
    'Name': 'Summon II',
    'Description': [
      'Summons Selene',
      'MP 1200',
      'CAST 3.0 (GCD)'
    ]
  },
  {
    'Icon': '/i/002000/002808.png',
    'Name': 'Deployment Tactics',
    'Description': [
      'SPREADS GALVANISE AND EYE FOR AN EYE AROUND TARGET',
      'SNAPSHOTS DURATION OF ORIGINAL GALVANISE',
      'MP 0',
      'RECAST 120.0 (oGCD)',
      'RADIUS 10.0'
    ]
  },
  {
    'Icon': '/i/000000/000862.png',
    'Name': 'Break',
    'Description': [
      ' POTENCY 50',
      '+20% SLOW',
      'DURATION 20.0',
      'MP 0',
      'CAST 2.5 (GCD)'
    ],
    'Note': `A zero MP DPS spell. Take it if you want to try solo healing
     so you can DPS while conserving mana. Slightly useful for open-world 
     content as you can abuse the Heavy debuff it inflicts to kite mobs around.`
  },
  {
    'Icon': '/i/002000/002811.png',
    'Name': 'Fey Caress',
    'Description': [
      'AOE CLEANSE (ONE DEBUFF)',
      'RECAST 60.0',
      'RADIUS 20.0'
    ]
  },
  {
    'Icon': '/i/002000/002805.png',
    'Name': 'Lustrate',
    'Description': [
      'Potency 600',
      'MP 0',
      'Recast 1.0 (oGCD)'
    ],
    'Interactions': [
      {
        'Icon': '/i/000000/000510.png',
        'Name': 'Aetherflow'
      }
    ]
  },
  {
    'Icon': '/i/000000/000503.png',
    'Name': 'Bio'
  },
  {
    'Icon': '/i/000000/000527.png',
    'Name': 'Place',
    'Description': [
      'ORDERS PET TO MOVE TO A SPECIFIC LOCATION'
    ]
  },
  {
    'Icon': '/i/000000/000529.png',
    'Name': 'Heel',
    'Description': [
      'ORDERS PET TO FOLLOW YOU'
    ]
  },
  {
    'Icon': '/i/000000/000526.png',
    'Name': 'Obey',
    'Description': [
      'Orders pet to refrain from using actions',
      'until ordered to do so'
    ]
  },
  {
    'Icon': 'i/020000/020669.png',
    'Name': 'Mind Potion'
  }
]
// Format looks like:
// 'name': {
//   'Icon': '',
//   'Name': '',
//   'Description': [
//     ''
//   ],
//   'Note': ``
// },
const skills = {

  'error': {
    'Icon': '/i/000000/000026.png',
    'Name': 'Error'
  },
  'ast': {
    'Essential Dignity': {
      'Icon': '/i/003000/003141.png',
      'Name': 'Essential Dignity',
      'Description': [
        `HEALS TARGET `,
        `POTENCY BASED ON MISSING HP`,
        `RECAST 40.0`
      ],
      'Note': `The potency of this heal varies between 400-1000 depending on how much HP the target is missing. Due to server ticks, casting Benefic II and using Essential Dignity immediately afterwards will cause the ED to snapshot the target’s HP before the Benefic II, resulting in a very strong heal. Let your Astrologian heal up tankbusters or even autos with this 0 MP low cooldown ability if possible instead of wasting Excogitation.`
    },
    'Earthly Star': {
      'Icon': '/i/003000/003143.png',
      'Name': 'Earthly Star',
      'Description': [
        `TIMED AOE HEAL / DAMAGE`,
        `CURE POTENCY 540 / 720`,
        `RECAST 60.0`
      ],
      'Note': `Earthly Star places a field on the ground. If detonated, it deals damage and heals players inside it for 540 potency. If allowed to last for 10 seconds, it turns into a “Giant” Star. When detonated, it deals damage and heals players inside it for 720 potency. Its relatively short cooldown and 0 MP cost makes it an extremely efficient but unintuitive form of healing. If you see an Earthly Star placed on the ground, you may assume that the Astrologian plans on healing an upcoming AoE with it. Refrain from using big heals like Indomitability so the Star doesn’t overheal when detonated.`
    },
    'Collective Unconscious': {
      'Icon': '/i/003000/003140.png',
      'Name': 'Collective Unconscious',
      'Description': [
        `AOE MITIGATON / REGEN`,
        `POTENCY 150 / TICK`,
        `DURATION 15.0 (+18.0)`,
        `RECAST 90.0`
      ],
      'Note': `The mitigation offered by this ability is only 10%, but the regen is extremely powerful and persists for 15 seconds after the Astrologian stops channelling. As Collective Unconscious can be channelled for up to 18 seconds, the regen could potentially last up to 33 seconds. If you see an Astrologian use this ability, let the regen heal the party up assuming there is no immediate threat to the party. Save your Whispering Dawn for later.`
    }
  },
  'brd': {
    'Nature\'s Minne': {
      'Icon': '/i/002000/002615.png',
      'Name': 'Nature\'s Minne',
      'Description': [
        `HEALING RECEIVED INCREASED BY 20%`,
        `CAST ON SELF OR ALLY`,
        `RECAST 45.0`,
        `DURATION 15.0`
      ],
      'Note': `This ability increases the healing received by its target from spells. Abilities such as Excogitation or Lustrate are not affected. This is generally used to boost your Adloquium which can then be spread to the party using Deployment Tactics.`
    },
    'Troubadour': {
      'Icon': '/i/002000/002612.png',
      'Name': 'Troubadour',
      'Description': [
        `BUFFS PARTY BASED ON CURRENT SONG`,
        `RECAST 180.0`,
        `DURATION 30.0`
      ],
      'Note': `Bards rotate through their songs as they DPS. Using Troubadour will grant party members a buff that depends on what song they are currently playing. The possible buffs are:
      Army’s Paeon: 10% physical mitigation
      Wanderer’s Minuet: 10% magical mitigation
      Mage’s Ballad: 15% max HP increase
      Use it if possible to help mitigate or live through raidwide damage.`
    }
  },
  'blm': {

  },
  'drk': {
    'The Blackest Night': {
      'Icon': '/i/003000/003081.png',
      'Name': 'THE BLACKEST NIGHT',
      'Description': [
        `SHIELD ON SELF OR TARGET`,
        `20% MAX HP ON SELF / 10% ON ALLY`,
        `MP 2400`,
        `RECAST 15.0`,
        `DURATION 7.0`
      ],
      'Note': `This ability places a shield worth 20% of the Dark Knight’s max HP if used on himself, or 10% if used on an ally. Due to its low cooldown and 0 gauge cost, it can be used frequently and is an excellent form of single-target mitigation. Keep an eye out for its buff icon in the party list and adjust your healing appropriately.`
    },
    'Living Dead': {
      'Icon': '/i/003000/003077.png',
      'Name': 'LIVING DEAD',
      'Description': [
        `GRANTS “WALKING DEAD” STATUS INSTEAD OF DEATH`,
        `RECAST 300.0`,
        `DURATION 10.0 / 10.0`
      ],
      'Note': `When activated, the Dark Knight gains a Living Dead buff that lasts 10 seconds. If the Dark Knight’s HP reaches 0 while this buff is active, he will gain a Walking Dead buff that lasts 10 seconds. While this buff is active, the Dark Knight’s HP will not drop below 1. He must be healed to 100% before Walking Dead expires or he will die. Benediction is the best way to deal with this. Do not waste an Excogitation or Lustrate before your cohealer plans on using Benediction or Essential Dignity. If your tank plans on using Living Dead to deal with a tankbuster, do not use Excogitation on him beforehand as he will not be using any defensive cooldowns to mitigate the tankbuster and will likely gain Walking Dead regardless of whether you use Excogitation or not.`
    }
  },
  'drg': {
    'Blood for Blood': {
      'Icon': '/i/000000/000309.png',
      'Name': 'BLOOD FOR BLOOD',
      'Description': [
        `15% DAMAGE UP`,
        `10% MORE DAMAGE TAKEN`,
        `RECAST 80.0`,
        `DURATION 20.0`
      ],
      'Note': `Dragoons use this to increase their DPS, but will result in them taking additional damage. Be mindful of Dragoons who use this ability during raidwide damage.`
    },
    'Battle Litany': {
      'Icon': '/i/002000/002585.png',
      'Name': 'BATTLE LITANY',
      'Description': [
        `15% CRIT BUFF TO SELF AND PARTY`,
        `RECAST 180.0`,
        `DURATION 20.0`
      ],
      'Note': `In a coordinated party, try to line up your Chain Stratagem with Battle Litany and other party buffs to maximise DPS.` }
  },
  'mch': {
    'Dismantle': {
      'Icon': '/i/003000/003011.png',
      'Name': 'Dismantle',
      'Description': [
        `LOWERS TARGET’S DAMAGE DEALT BY 10%`,
        `RECAST 60.0`,
        `DURATION 5.0`
      ],
      'Note': `A simple damage down debuff with a relatively short cooldown. Use it to mitigate tankbusters or raidwides.`
    }
  },
  'mnk': {
    'Mantra': {
      'Icon': '/i/000000/000216.png',
      'Name': 'MANTRA',
      'Description': [
        `INCREASES HEALING RECEIVED`,
        `FOR SELF AND PARTY BY 20%`,
        `RECAST 90.0`,
        `DURATION 15.0`
      ],
      'Note': `Basically an AoE Convalescence that can help with heal checks.`
    }

  },
  'nin': {
    'Smoke Screen': {
      'Icon': '/i/002000/002917.png',
      'Name': 'Smoke Screen',
      'Description': [
        `REDUCES ENMITY GENERATION`,
        `CAST ON PARTY MEMBER`,
        `RECAST 180.0`,
        `DURATION 15.0`
      ],
      'Note': `This ability is usually used on White Mages to lower the aggro they generate during intense heal checks, especially when using Cure III. Scholars do not generate much aggro and will almost never be targeted by this.`
    },
    'Trick Attack': {
      'Icon': '/i/000000/000618.png',
      'Name': 'Trick Attack',
      'Description': [
        `DEALS DAMAGE`,
        `POTENCY 240 (400 REAR)`,
        `10% INCREASE TO DAMAGE TAKEN BY TARGET (POSITIONAL)`,
        `RECAST 60.0`,
        `DURATION 10.0`
      ],
      'Note': `In a coordinated party, try to line up your Chain Stratagem with Trick Attack and other party buffs to maximise DPS.`
    }
  },
  'pld': {
    'Divine Veil': {
      'Icon': '/i/002000/002508.png',
      'Name': 'Divine Veil',
      'Description': [
        `AOE SHIELD 10% PLD’S MAX HP `,
        `PROC’S WHEN HEALED`,
        `RECAST 120.0`,
        `DURATION 30.0 / 30.0`
      ],
      'Note': `When used, the Paladin gains a buff that lasts 30 seconds. If the Paladin is healed while this buff is active, the buff triggers and applies a shield equal to 10% of the Paladin’s max HP on players within 15 yalms. This shield lasts 30 seconds. Keep an eye on the Paladin’s buff bar and ensure that it is triggered in time. You can manually Embrace the Paladin to trigger the shield.`
    },
    'Intervention': {
      'Icon': '/i/002000/002512.png',
      'Name': 'Intervention',
      'Description': [
        `REDUCEs DAMAGE TAKEN BY TARGET`,
        `REDUCTION 10% (+10% / +15%)`,
        `RECAST 10.0`,
        `GAUGE 50`,
        `DURATION 6.0`
      ],
      'Note': `When used on an ally, that ally takes 10% less damage. This consumes Oath Gauge, so it is usually saved for hard-hitting tankbusters. If the Paladin has Rampart or Sentinel active, the mitigation will be increased by 10% or 15% respectively (but not both). Look at your Paladin’s buff bar to estimate the mitigation.`
    },
    'Cover': {
      'Icon': '/i/002000/002501.png',
      'Name': 'Cover',
      'Description': [
        `TAKES DAMAGE INTENDED FOR TARGET`,
        `20% MITIGATION`,
        `DURATION 12.0`
      ],
      'Note': `Cover tethers the Paladin to another player and causes the Paladin to take all damage intended for that player for 12 seconds. Additionally, the Paladin will only suffer 80% of that damage. The Paladin and his target will both have a Cover buff. Keep an eye out for this buff and adjust your healing accordingly to heal the Paladin.`
    },
    'Hallowed Ground': {
      'Icon': '/i/002000/002502.png',
      'Name': 'Hallowed Ground',
      'Description': [
        `INVULNERABILITY`,
        `RECAST 420.0`,
        `DURATION 10.0`
      ],
      'Note': `Cover tethers the Paladin to another player and causes the Paladin to take all damage intended for that player for 12 seconds. Additionally, the Paladin will only suffer 80% of that damage. The Paladin and his target will both have a Cover buff. Keep an eye out for this buff and adjust your healing accordingly to heal the Paladin.`
    }
  },
  'rdm': {
    'Verraise': {
      'Icon': '/i/003000/003221.png',
      'Name': 'Verraise',
      'Description': [
        `RAISES DOWNED PLAYER (INFLICTS WEAKNESS)`,
        `MP 3600`,
        `CAST 10.0 (INSTANT WITH DUALCAST)`
      ],
      'Note': `Another resurrection spell with a 10 second hardcast time. However it can be casted instantly every other GCD due to Dualcast, making Red Mages invaluable for progression.`
    }
  },
  'sam': {

  },
  'sch': {

  },
  'smn': {
    'Devotion': {
      'Icon': '/i/002000/002688.png',
      'Name': 'Devotion',
      'Description': [
        `2% DAMAGE UP`,
        `2% AOE MITIGATION`,
        `5% HEALING BUFF`,
        `RECAST 120.0`,
        `DURATION 15.0`
      ],
      'Note': `Devotion increases damage dealt and reduces damage taken by party members by 2%. It also increases healing potency of party members by 5%. Do not rely on this as the buff is marginal and is used mainly for DPS rather than for heal checks.`
    },
    'Resurrection': {
      'Icon': '/i/000000/000511.png',
      'Name': 'Resurrection',
      'Description': [
        `RAISES DOWNED PLAYER (INFLICTS WEAKNESS)`,
        `MP 3600`,
        `CAST 8.0`
      ],
      'Note': `Functions just like your Resurrection. During prog, try to let your Summoner raise first so you can save your Swiftcast and MP for later.`
    }

  },
  'war': {
    'Shake it Off': {
      'Icon': '/i/002000/002563.png',
      'Name': 'Shake it Off',
      'Description': [
        `SHIELDS PARTY`,
        `8% (+16%) OF MAX HP`,
        `RECAST 90.0`,
        `DURATION 15.0`
      ],
      'Note': `The strength of this shield is equal to 8% of the Warrior’s max HP. This percentage is increased by 4% for each of the following buffs present on the Warrior: Thrill of Battle, Inner Beast, Vengeance and Raw Intuition. These buffs will be dispelled on cast. This is a decent partywide shield. Simply look for the icon, as unlike Divine Veil, it does not require a heal to trigger.`
    },
    'Holmgang': {
      'Icon': '/i/000000/000266.png',
      'Name': 'Holmgang',
      'Description': [
        `PREVENTS HP FROM FALLING BELOW 1`,
        `BINDS USER AND TARGET`,
        `DURATION 6.0`,
        `RECAST 180.0`
      ],
      'Note': `Warriors who plan to use Holmgang to deal with a tankbuster will not bother using any other cooldowns to mitigate the tankbuster. Let your cohealer use Benediction or Essential Dignity to heal them up. If these are not available, you’ll have to step in with Excogitation. If the Warrior plans on taking more than one tankbuster during the 6 second duration, ensure that you use Excogitation (or Lustrate) after the last tankbuster so their HP doesn’t just drop down to 1 again.`
    }
  },
  'whm': {
    'Benediction': {
      'Icon': '/i/002000/002627.png',
      'Name': 'Benediction',
      'Description': [
        `RESTORES ALL OF A TARGET'S HP`,
        'RECAST 180.0'
      ],
      'Note': `The most powerful single-target heal in the game. 
    You should know when your White Mage plans on using this, 
    as it would be a waste to use Excogitation if Benediction 
    is going to heal your target up to full anyway. Commonly used 
    after tankbusters to heal tanks who have used Holmgang or Living Dead.`
    },
    'Divine Benison': {
      'Icon': '/i/002000/002638.png',
      'Name': 'Divine Benison',
      'Description': [
        `SHIELDS TARGET 15% MAX HP`,
        `RECAST 30.0`
      ],
      'Note': `This is a rather strong shield. It helps greatly with tankbusters and you shouldn’t have to waste a GCD for Adloquium if Divine Benison is available. Its short cooldown ensures that it will be up for nearly every tankbuster. You might want to still use Excogitation to heal the tank.`
    },
    'Plenary Indulgence': {
      'Icon': '/i/002000/002639.png',
      'Name': 'Plenary Indulgence',
      'Description': [
        `AOE HEAL BASED ON CONFESSION STACKS`,
        `RECAST 60.0`
      ],
      'Note': `This ability heals party members for up to 450 potency, which is just 50 less than an Indomitability. Keep an eye on your party list and keep track of how many Confession stacks your party members have so you don’t waste your Indomitability when Plenary Indulgence alone is sufficient. ` }
  },
  'caster': {
    'Addle': {
      'Icon': '/i/000000/000861.png',
      'Name': 'Addle',
      'Description': [
        `10% REDUCTION TO INT AND MND`,
        `RECAST 90.0`,
        `DURATION 10.0`
      ],
      'Note': `Commonly used to mitigate magical raidwide damage.`
    },
    'Apocatastasis': {
      'Icon': '/i/000000/000868.png',
      'Name': 'Apocatastasis',
      'Description': [
        `20% MAGICAL MITIGATION ON ALLY`,
        `RECAST 90.0`,
        `DURATION 10.0`
      ],
      'Note': `Used to mitigate magical tankbusters or DoTs.`
    },
    'Mana Shift': {
      'Icon': '/i/000000/000867.png',
      'Name': 'Mana Shift',
      'Description': [
        `TRANSFERS UP TO 20% OF MAX MP TO ALLY`,
        `RECAST 120.0`
      ],
      'Note': `If you find yourself in a party without a Bard or Machinist in a healing-intensive fight, this ability is essential to prevent you from running out of mana.`
    }
  },
  'melee': {
    'Feint': {
      'Icon': '/i/000000/000828.png',
      'Name': 'Feint',
      'Description': [
        `10% REDUCTION TO STR AND DEX`,
        `RECAST 120.0`,
        `DURATION 10.0`
      ],
      'Note': `This ability can be used to lower the damage dealt by physical attacks. This can be used situationally to mitigate physical tankbusters.`
    }
  },
  'ranged': {
    'Refresh': {
      'Icon': '/i/000000/000847.png',
      'Name': 'Refresh',
      'Description': [
        `RESTORES MP IN AOE`,
        `600MP / TICK`,
        `RECAST 180.0`,
        `DURATION 30.0`
      ],
      'Note': `Restores 600MP/tick for a total of 6000 MP over 30 seconds.`
    },
    'Palisade': {
      'Icon': '/i/000000/000850.png',
      'Name': 'Palisade',
      'Description': [
        `20% PHYSICAL MITIGATION ON ALLY`,
        `RECAST 150.0`,
        `DURATION 10.0`
      ],
      'Note': `Used to mitigate physical tankbusters.`
    }
  },
  'tank': {
    'Convalescence': {
      'Icon': '/i/000000/000804.png',
      'Name': 'Convalescence',
      'Description': [
        `HEALING RECEIVED INCREASED BY 20%`,
        `RECAST 120.0`,
        `DURATION 20.0`
      ],
      'Note': `Convalescence only affects spells, not abilities, so your Aetherflow heals will not be affected by it. However, it does affect Adloquium. If you plan on using Deployment Tactics, it is worth asking your tank to use Convalescence to boost the strength of the initial Adloquium casted on him.`
    },
    'Reprisal': {
      'Icon': '/i/000000/000806.png',
      'Name': 'Reprisal',
      'Description': [
        `10% DAMAGE DOWN ON TARGET`,
        `RECAST 60.0`,
        `DURATION 5.0`
      ],
      'Note': `Your tanks should be using this to mitigate massive raidwide damage.  Reprisal alone is usually not sufficient, so you will still have to shield the party.`
    }
  },
  'healer': {

  }
}

schSkills.map(function ({ Name, ...rest }) {
  skills.sch[Name] = { Name, ...rest }
})

const getSkills = (array, job = 'sch') => array.map((name) => skills[job][name] || skills['error'])
const getSkillIcon = (name, job = 'sch') => {
  try {
    return skills[job][name]['Icon']
  } catch (e) {
    return skills['error']['Icon']
  }
}
export { getSkills, getSkillIcon }
