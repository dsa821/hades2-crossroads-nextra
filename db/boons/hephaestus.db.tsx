import {
  IconArmor,
  IconEarth,
  IconMagick,
  IconMaxLife,
} from "components/icons";
import { BoonData } from "models/types";

export const DbBoonsHephaestus: Record<string, BoonData> = {
  volcanicStrike: {
    name: "Volcanic Strike",
    key: "volcanic-strike",
    god: "hephaestus",
    element: "fire",
    desc: (
      <>
        Your <strong>Attacks</strong> occasionally create a blast that deals{" "}
        <strong>200</strong> damage in the area.
      </>
    ),
    scaleLabel: "Blast Recharge Time",
    scaleValue: "12 Sec.",
  },

  volcanicFlourish: {
    name: "Volcanic Flourish",
    key: "volcanic-flourish",
    god: "hephaestus",
    element: "fire",
    desc: (
      <>
        Your <strong>Specials</strong> occasionally create a blast that deals{" "}
        <strong>400</strong> damage in the area.
      </>
    ),
    scaleLabel: "Blast Recharge Time",
    scaleValue: "16 Sec.",
  },

  anvilRing: {
    name: "Anvil Ring",
    key: "anvil-ring",
    god: "hephaestus",
    element: "earth",
    desc: (
      <>
        Your <strong>Casts</strong> deal damage <strong>3</strong> times in
        succession.
      </>
    ),
    scaleLabel: "Cast Damage",
    scaleValue: 50,
    scaleRate: 1,
  },

  smithySprint: {
    name: "Smithy Sprint",
    key: "smithy-sprint",
    god: "hephaestus",
    element: "fire",
    desc: (
      <>
        After you <strong>Sprint</strong> for <strong>1 Sec.</strong>, use{" "}
        <IconMagick value="10" /> to create a blast that deals damage to nearby
        foes.
      </>
    ),
    scaleLabel: "Area Damage",
    scaleValue: 200,
  },

  fixedGain: {
    name: "Fixed Gain",
    key: "fixed-gain",
    god: "hephaestus",
    element: "earth",
    desc: (
      <>
        You take <strong>-10%</strong> damage, and restore some <IconMagick />{" "}
        whenever you take damage.
      </>
    ),
    scaleLabel: "Magick Restored from Damage",
    scaleValue: 50,
  },

  martialArt: {
    name: "Martial Art",
    key: "martial-art",
    god: "hephaestus",
    type: "infusion",
    desc: (
      <>
        Your <strong>Attack</strong> and <strong>Special</strong> deal more
        damage for each <IconEarth /> you have.
      </>
    ),
    scaleLabel: "Damage per Earth Boon",
    scaleValue: "+5%",
  },

  moltenTouch: {
    name: "Molten Touch",
    key: "molten-touch",
    god: "hephaestus",
    element: "fire",
    desc: (
      <>
        Your <strong>Attacks</strong> and <strong>Specials</strong> deal bonus
        damage to <strong>Armor</strong>.
      </>
    ),
    scaleLabel: "Damage vs. Armor",
    scaleValue: "+20%",
  },

  trustyShield: {
    name: "Trusty Shield",
    key: "trusty-shield",
    god: "hephaestus",
    element: "earth",
    desc: (
      <>
        After you enter a <strong>Location</strong>, <strong>Prime</strong>{" "}
        <IconMagick value="30" /> to gain <IconArmor /> until the next{" "}
        <strong>Location</strong>.
      </>
    ),
    scaleLabel: "Starting Armor",
    scaleValue: "+10",
  },

  mintCondition: {
    name: "Mint Condition",
    key: "mint-condition",
    god: "hephaestus",
    element: "earth",
    desc: (
      <>
        At the start of each <strong>Encounter</strong>, you are briefly{" "}
        <strong>Impervious</strong>.
      </>
    ),
    scaleLabel: "Impervious Duration",
    scaleValue: "8 Sec.",
  },

  heavyMetal: {
    name: "Heavy Metal",
    key: "heavy-metal",
    god: "hephaestus",
    element: "earth",
    desc: (
      <>
        Gain some <IconArmor />. Foes' attacks cannot knock you away.
      </>
    ),
    scaleLabel: "Armor Gained",
    scaleValue: "+50",
  },

  uncannyFortitude: {
    name: "Uncanny Fortitude",
    key: "uncanny-fortitude",
    god: "hephaestus",
    element: "earth",
    desc: (
      <>
        Gain bonus <IconMaxLife /> based on your <IconMagick /> limit.
      </>
    ),
    scaleLabel: "Max Life from Magick",
    scaleValue: "+20%",
  },

  grandCaldera: {
    name: "Grand Caldera",
    key: "grand-caldera",
    god: "hephaestus",
    element: "fire",
    desc: (
      <>
        Your blast effects from <strong>Hephaestus</strong> deal more damage and
        are <strong>50%</strong> larger.
      </>
    ),
    scaleLabel: "Bonus Blast Damage",
    scaleValue: "+50",
  },

  furnaceBlast: {
    name: "Furnace Blast",
    key: "furnace-blast",
    god: "hephaestus",
    element: "fire",
    desc: (
      <>
        Your blast effects from <strong>Hephaestus</strong> also inflict{" "}
        <strong>Vent</strong> on foes.
      </>
    ),
    scaleLabel: "Vent Damage",
    scaleValue: 300,
  },

  fineTuning: {
    name: "Fine Tuning",
    key: "fine-tuning",
    god: "hephaestus",
    element: "earth",
    type: "legendary",
    desc: (
      <>
        Your <strong>Aspect</strong> of the <strong>Nocturnal Arms</strong> is
        even stronger.
      </>
    ),
    scaleLabel: "Bonus Aspect Ranks",
    scaleValue: "+1",
  },
};
