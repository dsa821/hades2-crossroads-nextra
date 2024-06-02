import { mapHammerToCodex } from "lib/utils";
import { CodexData, HammerData } from "models/types";

const hammerData: Record<string, HammerData> = {
  finalSlice: {
    name: "Final Slice",
    key: "final-slice",
    weaponKey: "sister-blades",
  },

  marauderSlice: {
    name: "Marauder Slice",
    key: "marauder-slice",
    weaponKey: "sister-blades",
  },

  skulkingSlice: {
    name: "Skulking Slice",
    key: "skulking-slice",
    weaponKey: "sister-blades",
  },

  escalatingAmbush: {
    name: "Escalating Ambush",
    key: "escalating-ambush",
    weaponKey: "sister-blades",
  },

  explosiveAmbush: {
    name: "Explosive Ambush",
    key: "explosive-ambush",
    weaponKey: "sister-blades",
  },

  dancingKnives: {
    name: "Dancing Knives",
    key: "dancing-knives",
    weaponKey: "sister-blades",
  },

  hookKnives: {
    name: "Hook Knives",
    key: "hook-knives",
    weaponKey: "sister-blades",
  },

  spiralKnives: {
    name: "Spiral Knives",
    key: "spiral-knives",
    weaponKey: "sister-blades",
  },

  boundlessFlurry: {
    name: "Boundless Flurry",
    key: "boundless-flurry",
    weaponKey: "sister-blades",
  },

  concentratedFlurry: {
    name: "Concentrated Flurry",
    key: "concentrated-flurry",
    weaponKey: "sister-blades",
  },

  sureshotFlurry: {
    name: "Sureshot Flurry",
    key: "sureshot-flurry",
    weaponKey: "sister-blades",
  },
};

// Convert HammerData to CodexData
const DbHammersBlades: Record<string, CodexData> = {};

Object.entries(hammerData).forEach(([k, v]) => {
  DbHammersBlades[k] = mapHammerToCodex(v);
});

export { DbHammersBlades };