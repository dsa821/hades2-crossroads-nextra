import { mapAspectToCodex } from "lib/utils";
import { AspectData, CodexData } from "models/types";

const aspectData: Record<string, AspectData> = {
  melinoe: {
    name: "Aspect of Melinoë",
    key: "melinoe",
    weaponKey: "moonstone-axe",
    flavor:
      "Its twin blade can split even the light of the Moon, yet itself can never be separated.",
  },

  charon: {
    name: "Aspect of Charon",
    key: "charon",
    weaponKey: "moonstone-axe",
    flavor:
      "To navigate the rivers of the Underworld is to possess extraordinary poise and strength.",
  },

  thanatos: {
    name: "Aspect of Thanatos",
    key: "thanatos",
    weaponKey: "moonstone-axe",
    flavor:
      "Death comes peacefully for many mortals; yet for foes of the realm, exceptions must be made.",
  },
};

// Convert AspectData to CodexData
const DbAspectsAxe: Record<string, CodexData> = {};

Object.entries(aspectData).forEach(([k, v]) => {
  DbAspectsAxe[k] = mapAspectToCodex(v);
});

export { DbAspectsAxe };
