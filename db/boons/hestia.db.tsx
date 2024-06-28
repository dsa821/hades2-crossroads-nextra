import {
  IconFire,
  IconMagick,
  IconMaxLife,
  IconMaxMagick,
} from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsHestia: Record<string, BoonData> = {
  flameStrike: {
    name: "Flame Strike",
    key: "flame-strike",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Your <strong>Attacks</strong> inflict <strong>Scorch</strong>.
      </>
    ),
    scaleLabel: "Scorch Damage",
    scaleValue: 30,
  },

  flameFlourish: {
    name: "Flame Flourish",
    key: "flame-flourish",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Your <strong>Specials</strong> inflict <strong>Scorch</strong>.
      </>
    ),
    scaleLabel: "Scorch Damage",
    scaleValue: 20,
  },

  smolderRing: {
    name: "Smolder Ring",
    key: "smolder-ring",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Your <strong>Casts</strong> repeatedly inflict <strong>Scorch</strong>{" "}
        on foes.
      </>
    ),
    scaleLabel: "Scorch Damage",
    scaleValue: 40,
    scaleRate: 1,
  },

  sootSprint: {
    name: "Soot Sprint",
    key: "soot-sprint",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Your <strong>Sprint</strong> destroys most ranged shots near you, and
        inflicts <strong>Scorch</strong> on foes that fired.
      </>
    ),
    scaleLabel: "Scorch Damage per Projectile",
    scaleValue: 2,
  },

  hearthGain: {
    name: "Hearth Gain",
    key: "hearth-gain",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Whenever your <strong>Attack</strong> or <strong>Special</strong> deal
        damage, restore <IconMagick />.
      </>
    ),
    scaleLabel: "Magick Restored per Strike",
    scaleValue: 4,
  },

  slowCooker: {
    name: "Slow Cooker",
    key: "slow-cooker",
    god: "hestia",
    type: "infusion",
    desc: (
      <>
        Your <strong>Attacks</strong> and <strong>Specials</strong> gain{" "}
        <strong>Power</strong> the more <IconFire /> you have.
      </>
    ),
    scaleLabel: "Power per Fire Boon",
    scaleValue: "+2",
  },

  glowingCoal: {
    name: "Glowing Coal",
    key: "glowing-coal",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Hold <strong>Cast</strong> to aim a fiery projectile that explodes on
        impact. The binding circle forms there.
      </>
    ),
    scaleLabel: "Blast Damage",
    scaleValue: 60,
  },

  controlledBurn: {
    name: "Controlled Burn",
    key: "controlled-burn",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Your <strong>Ω Special</strong> also launches a fiery projectile, but
        uses <IconMagick value="+10" />.
      </>
    ),
    scaleLabel: "Blast Damage",
    scaleValue: 100,
  },

  burntOffering: {
    name: "Burnt Offering",
    key: "burnt-offering",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Gain <IconMaxLife /> and <IconMaxMagick /> but give up{" "}
        <strong>1 Boon</strong> selected by <strong>Hestia</strong>.
      </>
    ),
    scaleLabel: "Max Life & Magick",
    scaleValue: "+50",
  },

  crispyCoating: {
    name: "Crispy Coating",
    key: "crispy-coating",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Your <strong>Scorch</strong> effects deal bonus damage to{" "}
        <strong>Armor</strong>.
      </>
    ),
    scaleLabel: "Scorch Damage vs. Armor",
    scaleValue: "+100%",
  },

  naturalGas: {
    name: "Natural Gas",
    key: "natural-gas",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Whenever <strong>Scorch</strong>-afflicted foes are slain, they damage
        nearby foes.
      </>
    ),
    scaleLabel: "Blast Damage",
    scaleValue: 60,
  },

  pyroTechnique: {
    name: "Pyro Technique",
    key: "pyro-technique",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Your <strong>Scorch</strong> effects deal damage faster.
      </>
    ),
    scaleLabel: "Scorch Damage Rate",
    scaleValue: "+50%",
  },

  highlyFlammable: {
    name: "Highly Flammable",
    key: "highly-flammable",
    god: "hestia",
    element: "fire",
    desc: (
      <>
        Whenever you inflict <strong>Scorch</strong> on a foe for the first
        time, inflict more.
      </>
    ),
    scaleLabel: "First-Time Scorch Damage",
    scaleValue: "+50",
  },

  fireWalk: {
    name: "Fire Walk",
    key: "fire-walk",
    god: "hestia",
    element: "fire",
    type: "legendary",
    desc: (
      <>
        You take no more than <strong>1</strong> damage at a time from fire, and
        leave flames where you <strong>Sprint</strong>.
      </>
    ),
    scaleLabel: "Flame Trail Damage",
    scaleValue: 20,
    scaleRate: 0.25
  },
};
