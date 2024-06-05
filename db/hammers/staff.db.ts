import { mapHammerToCodex } from "lib/utils";
import { CodexData, HammerData } from "models/types";

const hammerData: Record<string, HammerData> = {
  extendingWallop: {
    name: "Extending Wallop",
    key: "extending-wallop",
    weaponKey: "witchs-staff",
  },

  mirroredThrasher: {
    name: "Mirrored Thrasher",
    key: "mirrored-thrasher",
    weaponKey: "witchs-staff",
  },

  rapidThrasher: {
    name: "Rapid Thrasher",
    key: "rapid-thrasher",
    weaponKey: "witchs-staff",
  },

  wickedThrasher: {
    name: "Wicked Thrasher",
    key: "wicked-thrasher",
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

  vampiricCataclysm: {
    name: "Vampiric Cataclysm",
    key: "vampiric-cataclysm",
    weaponKey: "witchs-staff",
  },

  dualMoonshot: {
    name: "Dual Moonshot",
    key: "dual-moonshot",
    weaponKey: "witchs-staff",
  },

  rapidMoonshot: {
    name: "Rapid Moonshot",
    key: "rapid-moonshot",
    weaponKey: "witchs-staff",
  },
  
  shimmeringMoonshot: {
    name: "Shimmering Moonshot",
    key: "shimmering-moonshot",
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
