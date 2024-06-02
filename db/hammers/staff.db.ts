import { mapHammerToCodex } from "lib/utils";
import { CodexData, HammerData } from "models/types";

const hammerData: Record<string, HammerData> = {
  doubleWallop: {
    name: "Double Wallop",
    key: "double-wallop",
    weaponKey: "witchs-staff",
  },

  marauderWallop: {
    name: "Marauder Wallop",
    key: "marauder-wallop",
    weaponKey: "witchs-staff",
  },

  extendingWallop: {
    name: "Extending Wallop",
    key: "extending-wallop",
    weaponKey: "witchs-staff",
  },

  meltingSwipe: {
    name: "Melting Swipe",
    key: "melting-swipe",
    weaponKey: "witchs-staff",
  },

  crossCataclysm: {
    name: "Cross Cataclysm",
    key: "cross-cataclysm",
    weaponKey: "witchs-staff",
  },

  doubleCataclysm: {
    name: "Double Cataclysm",
    key: "double-cataclysm",
    weaponKey: "witchs-staff",
  },

  vampiricCataclysm: {
    name: "Vampiric Cataclysm",
    key: "vampiric-cataclysm",
    weaponKey: "witchs-staff",
  },

  doubleMoonshot: {
    name: "Double Moonshot",
    key: "double-moonshot",
    weaponKey: "witchs-staff",
  },

  shimmeringMoonshot: {
    name: "Shimmering Moonshot",
    key: "shimmering-moonshot",
    weaponKey: "witchs-staff",
  },

  rapidMoonfire: {
    name: "Rapid Moonfire",
    key: "rapid-moonfire",
    weaponKey: "witchs-staff",
  },

  aethericMoonburst: {
    name: "Aetheric Moonburst",
    key: "aetheric-moonburst",
    weaponKey: "witchs-staff",
  },

  gigaMoonburst: {
    name: "Giga Moonburst",
    key: "giga-moonburst",
    weaponKey: "witchs-staff",
  },
};

// Convert HammerData to CodexData
const DbHammersStaff: Record<string, CodexData> = {};

Object.entries(hammerData).forEach(([k, v]) => {
  DbHammersStaff[k] = mapHammerToCodex(v);
});

export { DbHammersStaff };
