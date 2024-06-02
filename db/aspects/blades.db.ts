import { mapAspectToCodex } from "lib/utils";
import { AspectData, CodexData } from "models/types";

const aspectData: Record<string, AspectData> = {
  melinoe: {
    name: "Aspect of Melinoë",
    key: "melinoe",
    weaponKey: "sister-blades",
    flavor:
      "As there are many gardens to be cultivated, such a task requires precision instruments.",
  },

  artemis: {
    name: "Aspect of Artemis",
    key: "artemis",
    weaponKey: "sister-blades",
    flavor:
      "A flash of silver; whether the Huntress or the Moon, none can attest.",
  },

  pan: {
    name: "Aspect of Pan",
    key: "pan",
    weaponKey: "sister-blades",
    flavor:
      "The natural-grown horn can pierce as readily as a well-crafted blade.",
  },
};

// Convert AspectData to CodexData
const DbAspectsBlades: Record<string, CodexData> = {};

Object.entries(aspectData).forEach(([k, v]) => {
  DbAspectsBlades[k] = mapAspectToCodex(v);
});

export { DbAspectsBlades };
