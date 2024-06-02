import { mapAspectToCodex } from "lib/utils";
import { AspectData, CodexData } from "models/types";

const aspectData: Record<string, AspectData> = {
  melinoe: {
    name: "Aspect of Melinoë",
    key: "melinoe",
    weaponKey: "witchs-staff",
    flavor:
      "A waxing crescent moon; the promise of power, the responsibility to ready oneself.",
  },

  circe: {
    name: "Aspect of Circe",
    key: "circe",
    weaponKey: "witchs-staff",
    flavor:
      "A high priestess of the Unseen once used the staff to bring about necessary change.",
  },

  momus: {
    name: "Aspect of Momus",
    key: "momus",
    weaponKey: "witchs-staff",
    flavor:
      "Not even ever-patient Night herself spared much time for his insolence.",
  },
};

// Convert AspectData to CodexData
const DbAspectsStaff: Record<string, CodexData> = {};

Object.entries(aspectData).forEach(([k, v]) => {
  DbAspectsStaff[k] = mapAspectToCodex(v);
});

export { DbAspectsStaff };
