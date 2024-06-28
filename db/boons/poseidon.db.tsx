import {
  IconAshes,
  IconGold,
  IconHammer,
  IconHealing,
  IconMagick,
  IconMaxLife,
  IconPsyche,
  IconWater,
} from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsPoseidon: Record<string, BoonData> = {
  waveStrike: {
    name: "Wave Strike",
    key: "wave-strike",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Your <strong>Attacks</strong> hit foes with a splash that knocks other
        foes away.
      </>
    ),
    scaleLabel: "Splash Damage",
    scaleValue: 15,
  },

  waveFlourish: {
    name: "Wave Flourish",
    key: "wave-flourish",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Your <strong>Specials</strong> hit foes with a splash that knocks other
        foes away.
      </>
    ),
    scaleLabel: "Splash Damage",
    scaleValue: 20,
  },

  tidalRing: {
    name: "Tidal Ring",
    key: "tidal-ring",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Your <strong>Casts</strong> also immediately hit foes in front of you
        with a powerful splash.
      </>
    ),
    scaleLabel: "Splash Damage",
    scaleValue: 90,
  },

  breakerSprint: {
    name: "Breaker Sprint",
    key: "breaker-sprint",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Your <strong>Sprint</strong> deals damage on impact and knocks foes
        away, but uses <IconMagick value="5" /> per hit.
      </>
    ),
    scaleLabel: "Impact Damage",
    scaleValue: 80,
  },

  fluidGain: {
    name: "Fluid Gain",
    key: "fluid-gain",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        After you strike foes with your <strong>Weapon</strong>, a{" "}
        <strong>Spirit Bubble</strong> may appear.
      </>
    ),
    scaleLabel: "Spirit Bubble Chance",
    scaleValue: "10%",
    descExtra: (
      <>
        <strong>Spirit Bubble</strong>: Restores <IconMagick value="20" /> when
        you touch it. Expires when used, or after <strong>30 Sec.</strong>
      </>
    ),
  },

  waterFitness: {
    name: "Water Fitness",
    key: "water-fitness",
    god: "poseidon",
    type: "infusion",
    desc: (
      <>
        Gain <IconMaxLife /> for each <IconWater /> you have.
      </>
    ),
    scaleLabel: "Max Life per Water Boon",
    scaleValue: 15,
  },

  doubleUp: {
    name: "Double Up",
    key: "double-up",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Whenever you claim rewards other than <strong>Boons</strong>,{" "}
        <IconHammer />, or rare resources, a copy may appear.
      </>
    ),
    scaleLabel: "Double Reward Chance",
    scaleValue: "20%",
  },

  hydraulicMight: {
    name: "Hydraulic Might",
    key: "hydraulic-might",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        At the start of each <strong>Encounter</strong>, your{" "}
        <strong>Attacks</strong> and <strong>Specials</strong> are stronger for{" "}
        <strong>10 Sec.</strong>
      </>
    ),
    scaleLabel: "Initial Damage Bonus",
    scaleValue: "+100%",
  },

  floodControl: {
    name: "Flood Control",
    key: "flood-control",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        After you enter a <strong>Location</strong>, <strong>Prime</strong>{" "}
        <IconMagick value="30" /> to reduce any damage you would take.
      </>
    ),
    scaleLabel: "Damage Reduction per Hit",
    scaleValue: -2,
  },

  splashFount: {
    name: "Splash Fount",
    key: "splash-fount",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Whenever you use <strong>Ω Moves</strong>, create a watery blast near
        the first foe you damage.
      </>
    ),
    scaleLabel: "Delayed Blast Damage",
    scaleValue: 50,
  },

  oceansBounty: {
    name: "Ocean's Bounty",
    key: "oceans-bounty",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Any <strong>Minor Finds</strong> and <IconGold /> are worth more.
        Receive <IconGold />, <IconHealing />, and sometimes <IconAshes /> and{" "}
        <IconPsyche />, now.
      </>
    ),
    scaleLabel: "Reward Value",
    scaleValue: "+50%",
  },

  geyserSpout: {
    name: "Geyser Spout",
    key: "geyser-spout",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Your <strong>Ω Cast</strong> immediately detonates, dealing damage and
        knocking foes away.
      </>
    ),
    scaleLabel: "Omega Cast Damage",
    scaleValue: 200,
  },

  slipperySlope: {
    name: "Slippery Slope",
    key: "slippery-slope",
    god: "poseidon",
    element: "water",
    desc: (
      <>
        Your splash effects from <strong>Poseidon</strong> also inflict{" "}
        <strong>Slip</strong> on foes.
      </>
    ),
    scaleLabel: "Slip Bonus Damage",
    scaleValue: "+5%",
  },

  kingTide: {
    name: "King Tide",
    key: "king-tide",
    god: "poseidon",
    element: "water",
    type: "legendary",
    desc: (
      <>
        Your splash effects from <strong>Poseidon</strong> are larger and deal
        bonus damage to <strong>Guardians</strong>.
      </>
    ),
    scaleLabel: "Splash Damage vs. Guardians",
    scaleValue: "+200%",
  },
};
