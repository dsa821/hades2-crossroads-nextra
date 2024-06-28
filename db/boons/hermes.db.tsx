import {
  IconAir,
  IconEarth,
  IconFire,
  IconGold,
  IconMagick,
  IconWater,
} from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsHermes: Record<string, BoonData> = {
  tallOrder: {
    name: "Tall Order",
    key: "tall-order",
    god: "hermes",
    type: "infusion",
    desc: (
      <>
        While you have at least <strong>2</strong> each of <IconEarth />{" "}
        <IconWater /> <IconAir /> <IconFire /> <strong>Elements</strong>, you
        deal more damage.
      </>
    ),
    scaleLabel: "Infused Damage",
    scaleValue: "+20%",
  },

  greaterEvasion: {
    name: "Greater Evasion",
    key: "greater-evasion",
    god: "hermes",
    element: "air",
    desc: (
      <>
        Whenever you are struck, you may <strong>Dodge</strong> any damage.
      </>
    ),
    scaleLabel: "Dodge Chance",
    scaleValue: "+10%",
  },

  savedBreath: {
    name: "Saved Breath",
    key: "saved-breath",
    god: "hermes",
    element: "earth",
    desc: (
      <>
        Your <strong>Ω Cast</strong> uses less <IconMagick />.
      </>
    ),
    scaleLabel: "Omega Cast Cost",
    scaleValue: "-50%",
  },

  nimbleMind: {
    name: "Nimble Mind",
    key: "nimble-mind",
    god: "hermes",
    element: "earth",
    desc: (
      <>
        Your <strong>Ω Moves</strong> are faster.
      </>
    ),
    scaleLabel: "Omega Move Speed",
    scaleValue: "+15%",
  },

  nimbleLimbs: {
    name: "Nimble Limbs",
    key: "nimble-limbs",
    god: "hermes",
    element: "earth",
    desc: (
      <>
        Your <strong>Attack</strong>, <strong>Special</strong>, and{" "}
        <strong>Cast</strong> are faster.
      </>
    ),
    scaleLabel: "Strike Speed",
    scaleValue: "+10%",
  },

  midnightOil: {
    name: "Midnight Oil",
    key: "midnight-oil",
    god: "hermes",
    element: "air",
    desc: (
      <>
        While your <strong>Hex</strong> is ready, you move and strike faster.
      </>
    ),
    scaleLabel: "Bonus Move & Weapon Speed",
    scaleValue: "+15%",
  },

  quickBuck: {
    name: "Quick Buck",
    key: "quick-buck",
    god: "hermes",
    element: "air",
    desc: (
      <>
        You find <IconGold /> in greater quantities. Receive{" "}
        <strong>100</strong> <IconGold /> now, plus the bonus!
      </>
    ),
    scaleLabel: "Bonus Gold",
    scaleValue: "+20%",
  },

  hardTarget: {
    name: "Hard Target",
    key: "hard-target",
    god: "hermes",
    element: "air",
    desc: <>Most foes' ranged shots are slower.</>,
    scaleLabel: "Foe Projectile Speed",
    scaleValue: "-30%",
  },

  wittyRetort: {
    name: "Witty Retort",
    key: "witty-retort",
    god: "hermes",
    element: "earth",
    desc: (
      <>
        Your <strong>Hex</strong> requires using less <IconMagick /> before it
        is ready.
      </>
    ),
    scaleLabel: "Reduced Magick Cost",
    scaleValue: "-15%",
  },

  nitroBoost: {
    name: "Nitro Boost",
    key: "nitro-boost",
    god: "hermes",
    element: "fire",
    desc: (
      <>
        Your <strong>Sprint</strong> is <strong>15%</strong> faster and gives
        you a barrier that ignores instances of damage.
      </>
    ),
    scaleLabel: "Hits Blocked per Encounter",
    scaleValue: 1,
  },

  meanStreak: {
    name: "Mean Streak",
    key: "mean-streak",
    god: "hermes",
    element: "air",
    desc: (
      <>
        Each time you slay a foe, deal more damage for the next{" "}
        <strong>30 Sec.</strong>
      </>
    ),
    scaleLabel: "Bonus Damage per Slain Foe",
    scaleValue: "+1%",
  },

  closeCall: {
    name: "Close Call",
    key: "close-call",
    god: "hermes",
    element: "air",
    type: "legendary",
    desc: (
      <>
        Gain <strong>+1</strong> use of <strong>Death Defiance</strong> that
        makes everything else move <strong>90%</strong> slower.
      </>
    ),
    scaleLabel: "Slow Duration",
    scaleValue: "8 Sec.",
  },
};
