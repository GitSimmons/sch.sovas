const sch = [
  {
    'Icon': '/i/000000/000510.png',
    'Name': 'Aetherflow',
    'Description': [
      'Grants 3 stacks of Aetherflow',
      'Restores 10% of max MP',
      'Recast 60.0 (45.0 due toe Quickened Aetherflow) (oGCD)'
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
      'Cannot crit',
      'MP 0',
      'Dureaction 45.0',
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
    'Name': 'Largesse'
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
    ]
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
      'SPELLS CAN BE CAST WITHOUT INTERRUPTION',
      'NULLIFIES MOST KNOCKBACK/DRAW-IN EFFECTS',
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
      'Orders pet to refrain from using actions until ordered to do so.'
    ]
  }
]

let schSkills = {}
sch.map(function ({ Name, ...rest }) { schSkills[Name] = { Name, ...rest } })

export { schSkills }
