import { mapHammerToCodex } from "lib/utils";
import { CodexData, HammerData } from "models/types";

const hammerData: Record<string, HammerData> = {
  invertedSpark: {
    name: "Inverted Spark",
    key: "inverted-spark",
    weaponKey: "umbral-flames",
  },

  leadenSpark: {
    name: "Leaden Spark",
    key: "leaden-spark",
    weaponKey: "umbral-flames",
  },

  megaSpark: {
    name: "Mega Spark",
    key: "mega-spark",
    weaponKey: "umbral-flames",
  },

  sustainedSpark: {
    name: "Sustained Spark",
    key: "sustained-spark",
    weaponKey: "umbral-flames",
  },

  splitSpark: {
    name: "Split Spark",
    key: "split-spark",
    weaponKey: "umbral-flames",
  },

  cleanCandle: {
    name: "Clean Candle",
    key: "clean-candle",
    weaponKey: "umbral-flames",
  },

  direCandle: {
    name: "Dire Candle",
    key: "dire-candle",
    weaponKey: "umbral-flames",
  },

  tripleComet: {
    name: "Triple Comet",
    key: "triple-comet",
    weaponKey: "umbral-flames",
  },

  meltingCoil: {
    name: "Melting Coil",
    key: "melting-coil",
    weaponKey: "umbral-flames",
  },

  risingCoil: {
    name: "Rising Coil",
    key: "rising-coil",
    weaponKey: "umbral-flames",
  },

  cleanHelix: {
    name: "Clean Helix",
    key: "clean-helix",
    weaponKey: "umbral-flames",
  },

  whirlingCoil: {
    name: "Whirling Coil",
    key: "whirling-coil",
    weaponKey: "umbral-flames",
  },

  tripleHelix: {
    name: "Triple Helix",
    key: "triple-helix",
    weaponKey: "umbral-flames",
  },
};

// Convert HammerData to CodexData
const DbHammersFlames: Record<string, CodexData> = {};

Object.entries(hammerData).forEach(([k, v]) => {
  DbHammersFlames[k] = mapHammerToCodex(v);
});

export { DbHammersFlames };
