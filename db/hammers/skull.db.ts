import { mapHammerToCodex } from "lib/utils";
import { CodexData, HammerData } from "models/types";

const hammerData: Record<string, HammerData> = {
  marauderSlash: {
    name: "Marauder Slash",
    key: "marauder-slash",
    weaponKey: "moonstone-axe",
  },

  unyieldingSlash: {
    name: "Unyielding Slash",
    key: "unyielding-slash",
    weaponKey: "moonstone-axe",
  },

  executionersChop: {
    name: "Executioner's Chop",
    key: "executioners-chop",
    weaponKey: "moonstone-axe",
  },

  hellSplitter: {
    name: "Hell Splitter",
    key: "hell-splitter",
    weaponKey: "moonstone-axe",
  },

  dashingHeave: {
    name: "Dashing Heave",
    key: "dashing-heave",
    weaponKey: "moonstone-axe",
  },

  advancingWhirlwind: {
    name: "Advancing Whirlwind",
    key: "advancing-whirlwind",
    weaponKey: "moonstone-axe",
  },

  concentratedWhirlwind: {
    name: "Concentrated Whirlwind",
    key: "concentrated-whirlwind",
    weaponKey: "moonstone-axe",
  },

  furiousWhirlwind: {
    name: "Furious Whirlwind",
    key: "furious-whirlwind",
    weaponKey: "moonstone-axe",
  },

  psychicWhirlwind: {
    name: "Psychic Whirlwind",
    key: "psychic-whirlwind",
    weaponKey: "moonstone-axe",
  },

  empoweringGuard: {
    name: "Empowering Guard",
    key: "empowering-guard",
    weaponKey: "moonstone-axe",
  },

  meltingShredder: {
    name: "Melting Shredder",
    key: "melting-shredder",
    weaponKey: "moonstone-axe",
  },

  gigaCleaver: {
    name: "Giga Cleaver",
    key: "giga-cleaver",
    weaponKey: "moonstone-axe",
  },

  suddenCleaver: {
    name: "Sudden Cleaver",
    key: "sudden-cleaver",
    weaponKey: "moonstone-axe",
  },
};

// Convert HammerData to CodexData
const DbHammersSkull: Record<string, CodexData> = {};

Object.entries(hammerData).forEach(([k, v]) => {
  DbHammersSkull[k] = mapHammerToCodex(v);
});

export { DbHammersSkull };
