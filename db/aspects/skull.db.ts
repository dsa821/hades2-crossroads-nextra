import { mapAspectToCodex } from "lib/utils";
import { AspectData, CodexData } from "models/types";

const aspectData: Record<string, AspectData> = {
  melinoe: {
    name: "Aspect of Melinoë",
    key: "melinoe",
    weaponKey: "argent-skull",
    flavor:
      "The will of Night is never to be chronicled, but witnessed by the dead and the shadow.",
  },

  medea: {
    name: "Aspect of Medea",
    key: "medea",
    weaponKey: "argent-skull",
    flavor:
      "She shall find comfort in the skulls of her foes remaining ever close at hand; one especially.",
  },

  persephone: {
    name: "Aspect of Persephone",
    key: "persephone",
    weaponKey: "argent-skull",
    flavor:
      "Life and death, forever embodied in a Queen both splendorous and dark at once.",
  },
};

// Convert AspectData to CodexData
const DbAspectsSkull: Record<string, CodexData> = {};

Object.entries(aspectData).forEach(([k, v]) => {
  DbAspectsSkull[k] = mapAspectToCodex(v);
});

export { DbAspectsSkull };
