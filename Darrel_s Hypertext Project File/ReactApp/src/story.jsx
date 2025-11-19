const story = {
  "intro": {
    "title": "The Adventures of the Multiverse",
    "setting": "The Bleeding Edge",
    "narration":
      "The story opens at the Bleeding Edge, the crumbling barrier of the Multiverse. The Traveler awakens here, summoned by the Monitor. Timelines collide, the Source Wall is cracking, and Anti-Life corruption spreads like wildfire.",
    "choices": [
      {
        "id": "pathA",
        "label": "Follow the Speed Force into Flashpoint broken timeline",
        "theme": "Timeline Repair",
      },
      {
        "id": "pathB",
        "label": "Step through a Boom Tube into Apokolips cosmic war",
        "theme": "Cosmic War",
      },
      {
        "id": "pathC",
        "label": "Investigate the Phantom Zone anomaly",
        "theme": "Interdimensional Mystery",
      },
    ],
  },

  "paths": {
    "pathA": {
      "title": "Timeline Repair",
      "theme": "The cost of tampering with time",
      "scenarios": [
        {
          "id": "PathA1",
          "desc": "Join forces with Thomas Wayne and Superboy to restore fragments of the timeline.",
          "choice": ["Value allies", "Self-reliance (steal technology)"],
        },
        {
          "id": "PathA2",
          "desc": "Face Reverse-Flash's paradox attack, distorting reality around you.",
          "choice": ["Stand with allies", "Sacrifice stability for personal gain"],
        },
        {
          "id": "PathA3",
          "desc": "Encounter the Time Masters warning you of a greater threat.",
          "choice": [" Listen to advice", "Ignore and pursue own path"],
        },
      ],
      "funnel": "earthPrime",
    },
    "pathB": {
      "title": "Cosmic War",
      "theme": "The weight of cosmic-scale decisions",
      "scenarios": [
        {
          "id": "PathB1",
          "desc": "Engage Kalibak and Darkseid in a ferocious battlefield.",
          "choice": ["Direct attack", " Use strategy (Motherbox, Orion)"],
        },
        {
          "id": "PathB2",
          "desc": "Confront corruption spreading across Apokolips.",
          "choice": [" Resist temptation", "Harness corruption for power"],
        },
        {
          "id": "PathB3",
          "desc": "Find an imprisoned New God pleading for freedom.",
          "choice": ["Free them", "Leave them to fate"],
        },
      ],
      "funnel": "earthPrime",
    },
    "pathC": {
      "title": "Interdimensional Mystery",
      "theme": "Phantom Zone investigation",
      "scenarios": [
        {
          "id": "PathC1",
          "desc": "Investigate anomalies hinting at a hidden timeline.",
          "choice": ["Explore the hidden timeline", "Seal the anomaly immediately"],
        },
        {
          "id": "PathC2",
          "desc": "Encounter a mysterious prisoner with knowledge of Anti-Life.",
          "choice": [" Trust the prisoner", " Ignore warnings and move on"],
        },
      ],
      "funnel": "earthPrime",
    },
  },

  "earthPrime": {
    "title": "Earth-Prime",
    "narration":
      "The Traveler confronts their corrupted Doppelganger, representing the eternal struggle between power and self-preservation.",
    "choices": [
      {
        "id": "reason",
        "label": "Try to reason with the Doppelganger (internal struggle)",
        "leadsTo": ["heroEnding", "collapseEnding", "philosopherEnding"],
      },
      {
        "id": "fight",
        "label": "Fight the Doppelganger (external conflict)",
        "leadsTo": ["corruptedEnding", "bittersweetEnding", "trueEnding", "saviorEnding"],
      },
      {
        "id": "merge",
        "label": "Attempt to merge with the Doppelganger (risky transcendence)",
        "leadsTo": ["transcendentEnding", "collapseEnding"],
      },      
    ],
    "funnel": "endings",
  },

  "endings": {
    "collapseEnding": {
      "title": "Collapse Ending",
      "theme": "Existential despair",
      "narration": "The Traveler fails to overcome corruption. The Multiverse collapses into chaos.",
    },
    "corruptedEnding": {
      "title": "Corrupted Ending",
      "theme": "Villain origin",
      "narration": "Succumbing to temptation, the Traveler becomes the Multiverse's new conqueror.",
    },
    "heroEnding": {
      "title": "Hero Ending",
      "theme": "Restoration",
      "narration": "With allies, the Traveler triumphs, restoring balance to the Multiverse.",
    },
    "bittersweetEnding": {
      "title": "Bittersweet Ending",
      "theme": "Sacrifice",
      "narration": "The Traveler defeats corruption but at the cost of their own existence. The Multiverse survives, but the Traveler fades.",
    },
    "trueEnding": {
      "title": "True Ending",
      "theme": "Transcendence",
      "narration": "The Traveler transcends mortality, becoming the Monitor and guardian of infinite timelines.",
    },
    "philosopherEnding": {
      "title": "Philosopher Ending",
      "theme": "Wisdom",
      "narration": "Through reasoning, the Doppelganger embraces introspection. Knowledge spreads and the Multiverse heals over time.",
    },
    "saviorEnding": {
      "title": "Savior Ending",
      "theme": "Heroic sacrifice",
      "narration": "The Traveler sacrifices power to banish corruption, saving countless worlds at great personal cost.",
    },
    "transcendentEnding": {
      "title": "Transcendent Ending",
      "theme": "Union of duality",
      "narration": "The Traveler merges with the Doppelganger, unlocking unimaginable power and reshaping reality itself.",
    },
  },
};

export default story;
