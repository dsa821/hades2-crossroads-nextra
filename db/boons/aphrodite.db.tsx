import { IconAir, IconLife, IconMagick, IconMaxLife } from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsAphrodite: Record<string, BoonData> = {
  flutterStrike: {
    name: "Flutter Strike",
    key: "flutter-strike",
    god: "aphrodite",
    element: "water",
    desc: (
      <>
        Your <strong>Attacks</strong> deal more damage to nearby foes.
      </>
    ),
    scaleLabel: "Close-Up Damage",
    scaleValue: "+80%",
  },

  flutterFlourish: {
    name: "Flutter Flourish",
    key: "flutter-flourish",
    god: "aphrodite",
    element: "water",
    desc: (
      <>
        Your <strong>Specials</strong> deal more damage to nearby foes.
      </>
    ),
    scaleLabel: "Close-Up Damage",
    scaleValue: "+100%",
  },

  raptureRing: {
    name: "Rapture Ring",
    key: "rapture-ring",
    god: "aphrodite",
    element: "air",
    desc: (
      <>
        Your <strong>Casts</strong> inflict <strong>Weak</strong>, and damage
        foes while dragging them toward the center.
      </>
    ),
    scaleLabel: "Cast Damage",
    scaleValue: 10,
    scaleRate: 0.85,
  },

  passionRush: {
    name: "Passion Rush",
    key: "passion-rush",
    god: "aphrodite",
    element: "air",
    desc: (
      <>
        <strong>Dashing</strong> damages surrounding foes and inflicts{" "}
        <strong>Weak</strong>, and again once you stop.
      </>
    ),
    scaleLabel: "Area Damage",
    scaleValue: 20,
  },

  glamourGain: {
    name: "Glamour Gain",
    key: "glamour-gain",
    god: "aphrodite",
    element: "air",
    desc: (
      <>
        You inflict <strong>Weak</strong> on nearby foes, and gradually restore{" "}
        <IconMagick /> while any nearby foe is <strong>Weak</strong>.
      </>
    ),
    scaleLabel: "Magick Restoration",
    scaleValue: 6,
    scaleRate: 1,
  },

  wispyWiles: {
    name: "Wispy Wiles",
    key: "wispy-wiles",
    god: "aphrodite",
    type: "infusion",
    desc: (
      <>
        Gain a chance to <strong>Dodge</strong> for each <IconAir /> you have.
      </>
    ),
    scaleLabel: "Dodge Chance per Air Boon",
    scaleValue: "+3%",
  },

  secretCrush: {
    name: "Secret Crush",
    key: "secret-crush",
    god: "aphrodite",
    element: "air",
    desc: (
      <>
        After you enter a <strong>Location</strong>, <strong>Prime 20</strong>{" "}
        <IconMagick /> to add Power to your Attack.
      </>
    ),
    scaleLabel: "Attack Power",
    scaleValue: "+5%",
  },

  lifeAffirmation: {
    name: "Life Affirmation",
    key: "life-affirmation",
    god: "aphrodite",
    element: "air",
    desc: (
      <>
        Any <IconMaxLife /> rewards you find have a greater effect.
      </>
    ),
    scaleLabel: "Bonus Life Gain",
    scaleValue: "+40%",
  },

  shamelessAttitude: {
    name: "Shameless Attitude",
    key: "shameless-attitude",
    god: "aphrodite",
    element: "air",
    desc: (
      <>
        You deal more damage. While you have at least <strong>80%</strong>{" "}
        <IconLife />, the bonus is doubled.
      </>
    ),
    scaleLabel: "High-Life Bonus Damage",
    scaleValue: "+10%",
  },

  heartBreaker: {
    name: "Heart Breaker",
    key: "heart-breaker",
    god: "aphrodite",
    element: "water",
    desc: (
      <>
        Whenever you use <IconMagick value="30" />, create a{" "}
        <strong>Heartthrob</strong>.
      </>
    ),
    scaleLabel: "Heartthrob Area Damage",
    scaleValue: 120,
    descExtra: (
      <>
        <strong>Heartthrobs</strong>: Explosive projectiles that revolves around
        you. Expire after <strong>20 Sec.</strong>
      </>
    ),
  },

  healthyRebound: {
    name: "Healthy Rebound",
    key: "healthy-rebound",
    god: "aphrodite",
    element: "water",
    desc: (
      <>
        Whenever you exit a <strong>Location</strong>, restore{" "}
        <strong>100%</strong> <IconLife /> if you have not lost too much.
      </>
    ),
    scaleLabel: "Min Life Required",
    scaleValue: "80%",
  },

  brokenResolve: {
    name: "Broken Resolve",
    key: "broken-resolve",
    god: "aphrodite",
    element: "water",
    desc: (
      <>
        Your <strong>Weak</strong> effects are more potent.
      </>
    ),
    scaleLabel: "Weak Damage Reduction",
    scaleValue: "+10%",
  },

  sweetSurrender: {
    name: "Sweet Surrender",
    key: "sweet-surrender",
    god: "aphrodite",
    element: "water",
    desc: (
      <>
        <strong>Weak</strong>-afflicted foes take more damage.
      </>
    ),
    scaleLabel: "Damage vs. Weak",
    scaleValue: "+10%",
  },

  nervousWreck: {
    name: "Nervous Wreck",
    key: "nervous-wreck",
    god: "aphrodite",
    element: "air",
    type: "legendary",
    desc: (
      <>
        Whenever you inflict <strong>Weak</strong>, also randomly inflict other
        gods' <strong>Curses</strong>.
      </>
    ),
    scaleLabel: "Bonus Random Curses",
    scaleValue: 3,
  },
};
