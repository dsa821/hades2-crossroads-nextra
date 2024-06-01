import { mapHammerToCodex } from "lib/utils";
import { CodexData, HammerData } from "models/types";

const hammerData: Record<string, HammerData> = {
  bolsteredArray: {
    name: "Bolstered Array",
    key: "bolstered-array",
    weaponKey: "argent-skull",
  },

  destructiveArray: {
    name: "Destructive Array",
    key: "destructive-array",
    weaponKey: "argent-skull",
  },

  fetchingArray: {
    name: "Fetching Array",
    key: "fetching-array",
    weaponKey: "argent-skull",
  },

  possessedArray: {
    name: "Possessed Array",
    key: "possessed-array",
    weaponKey: "argent-skull",
  },

  loomingIgnition: {
    name: "Looming Ignition",
    key: "looming-ignition",
    weaponKey: "argent-skull",
  },

  fullSalvo: {
    name: "Full Salvo",
    key: "full-salvo",
    weaponKey: "argent-skull",
  },

  rocketBombard: {
    name: "Rocket Bombard",
    key: "rocket-bombard",
    weaponKey: "argent-skull",
  },

  suddenDriver: {
    name: "Sudden Driver",
    key: "sudden-driver",
    weaponKey: "argent-skull",
  },

  colossusTackle: {
    name: "Colossus Tackle",
    key: "colossus-tackle",
    weaponKey: "argent-skull",
  },

  meltingTackle: {
    name: "Melting Tackle",
    key: "melting-tackle",
    weaponKey: "argent-skull",
  },

  sidelongCrash: {
    name: "Sidelong Crash",
    key: "sidelong-crash",
    weaponKey: "argent-skull",
  },

  twistingCrash: {
    name: "Twisting Crash",
    key: "twisting-crash",
    weaponKey: "argent-skull",
  },
};

// Convert HammerData to CodexData
const DbHammersSkull: Record<string, CodexData> = {};

Object.entries(hammerData).forEach(([k, v]) => {
  DbHammersSkull[k] = mapHammerToCodex(v);
});

export { DbHammersSkull };
