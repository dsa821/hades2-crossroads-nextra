import { mapHammerToCodex } from "lib/utils";
import { CodexData, HammerData } from "models/types";

const hammerData: Record<string, HammerData> = {
  furiousFire: {
    name: "Furious Fire",
    key: "furious-fire",
    weaponKey: "umbral-flames",
  },

  splitFire: {
    name: "Split Fire",
    key: "split-fire",
    weaponKey: "umbral-flames",
  },

  sustainedFire: {
    name: "Sustained Fire",
    key: "sustained-fire",
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

  crushingComet: {
    name: "Crushing Comet",
    key: "crushing-comet",
    weaponKey: "umbral-flames",
  },

  meltingComet: {
    name: "Melting Comet",
    key: "melting-comet",
    weaponKey: "umbral-flames",
  },

  growingCoils: {
    name: "Growing Coils",
    key: "growing-coils",
    weaponKey: "umbral-flames",
  },

  cleanHelix: {
    name: "Clean Helix",
    key: "clean-helix",
    weaponKey: "umbral-flames",
  },

  originHelix: {
    name: "Origin Helix",
    key: "origin-helix",
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
