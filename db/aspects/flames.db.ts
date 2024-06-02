import { mapAspectToCodex } from "lib/utils";
import { AspectData, CodexData } from "models/types";

const aspectData: Record<string, AspectData> = {
  melinoe: {
    name: "Aspect of Melinoë",
    key: "melinoe",
    weaponKey: "umbral-flames",
    flavor:
      "No single light can illuminate the many crossroads ahead; thus there are two.",
  },

  moros: {
    name: "Aspect of Moros",
    key: "moros",
    weaponKey: "umbral-flames",
    flavor:
      "Feared and hated Doom lingers like a sword about to fall; even his time shall come.",
  },

  eos: {
    name: "Aspect of Eos",
    key: "eos",
    weaponKey: "umbral-flames",
    flavor:
      "Rosy-fingered Dawn is mistress of a certain light more captivating than any other.",
  },
};

// Convert AspectData to CodexData
const DbAspectsFlames: Record<string, CodexData> = {};

Object.entries(aspectData).forEach(([k, v]) => {
  DbAspectsFlames[k] = mapAspectToCodex(v);
});

export { DbAspectsFlames };
