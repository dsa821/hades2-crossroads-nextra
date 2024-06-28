import { IconLife } from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsArtemis: Record<string, BoonData> = {
  pressurePoints: {
    name: "Pressure Points",
    key: "pressure-points",
    god: "artemis",
    element: "earth",
    desc: (
      <>
        Any damage you deal may be <strong>Critical</strong>.
      </>
    ),
    scaleLabel: "Critical Chance",
    scaleValue: "+3%",
  },

  silverStreak: {
    name: "Silver Streak",
    key: "silver-streak",
    god: "artemis",
    element: "air",
    desc: (
      <>
        After you <strong>Dash</strong>, your <strong>Ω Moves</strong> deal more
        damage for <strong>2 Sec.</strong>
      </>
    ),
    scaleLabel: "Bonus Omega Damage",
    scaleValue: "+20%",
  },

  firstBlood: {
    name: "First Blood",
    key: "first-blood",
    god: "artemis",
    element: "earth",
    desc: (
      <>
        Foes with at least <strong>80%</strong> <IconLife /> or{" "}
        <strong>80% Armor</strong> may take <strong>Critical</strong> damage.
      </>
    ),
    scaleLabel: "Critical Chance",
    scaleValue: "+15%",
  },

  lethalSnare: {
    name: "Lethal Snare",
    key: "lethal-snare",
    god: "artemis",
    element: "earth",
    desc: (
      <>
        Foes in your <strong>Casts</strong> may take <strong>Critical</strong>{" "}
        damage from your <strong>Attacks</strong>.
      </>
    ),
    scaleLabel: "Critical Chance",
    scaleValue: "+10%",
  },

  easyShot: {
    name: "Easy Shot",
    key: "easy-shot",
    god: "artemis",
    element: "air",
    desc: (
      <>
        A piercing arrow fires toward any foe damaged by your{" "}
        <strong>Ω Cast</strong>.
      </>
    ),
    scaleLabel: "Arrow Damage",
    scaleValue: 30,
  },

  supportFire: {
    name: "Support Fire",
    key: "support-fire",
    god: "artemis",
    element: "air",
    desc: (
      <>
        After you hit with your <strong>Attacks</strong> or{" "}
        <strong>Specials</strong>, fire a seeking arrow.
      </>
    ),
    scaleLabel: "Arrow Damage",
    scaleValue: 10,
  },

  deathWarrant: {
    name: "Death Warrant",
    key: "death-warrant",
    god: "artemis",
    element: "earth",
    desc: (
      <>
        A random foe occasionally becomes <strong>Marked</strong>. If it takes{" "}
        <strong>Critical</strong> damage, this repeats.
      </>
    ),
    scaleLabel: "Time Between Marks",
    scaleValue: "20 Sec.",
    descExtra: (
      <>
        <strong>Marked</strong>
        <em>(Curse)</em>: Afflicted foes have <strong>+30%</strong> chance to
        take <strong>Critical</strong> damage. Lasts <strong>6 Sec.</strong>
      </>
    ),
  },
};
