import { CodexData, ArcanaData } from "models/types";

const arcanaData: Record<string, ArcanaData> = {
  sorceress: {
    name: "The Sorceress",
    key: "sorceress",
    order: 1,
    grasp: 1,
    flavor:
      "Left to her own devices, she learned to confront the world on her own terms.",
  },

  waywardSon: {
    name: "The Wayward Son",
    key: "wayward-son",
    order: 2,
    grasp: 1,
    flavor:
      "Even the Underworld itself struggled to contain him, such was his lust for life.",
  },

  huntress: {
    name: "The Huntress",
    key: "huntress",
    order: 3,
    grasp: 2,
    flavor:
      "Through discipline and instinct comes surpassing skill both in shadow and the light of the Moon.",
  },

  night: {
    name: "Night",
    key: "night",
    order: 4,
    grasp: 2,
    flavor:
      "She sprang from Chaos, and formed much of the natural world, above the surface and below.",
  },

  moon: {
    name: "The Moon",
    key: "moon",
    order: 5,
    grasp: 0,
    flavor:
      "Even as she races her steeds across the fathomless sky, she bears witness to all.",
  },

  furies: {
    name: "The Furies",
    key: "furies",
    order: 6,
    grasp: 2,
    flavor:
      "In the deepest reaches of the Underworld, three are as feared as the god of the dead himself.",
  },

  titan: {
    name: "The Titan",
    key: "titan",
    order: 7,
    grasp: 2,
    flavor:
      "He stole from gods the gift of fire, for mortals; thus he suffered, but he grew strong.",
  },

  messenger: {
    name: "The Messenger",
    key: "messenger",
    order: 8,
    grasp: 1,
    flavor:
      "With incomparable swiftness can he travel from the highest peaks to the lowest depths.",
  },

  unseen: {
    name: "The Unseen",
    key: "unseen",
    order: 9,
    grasp: 5,
    flavor:
      "Upon their ancient oath, in shadow, they serve; and to shadow, they return.",
  },

  death: {
    name: "Death",
    key: "death",
    order: 10,
    grasp: 3,
    flavor:
      "Some mortals would sense his soft approach, others taken by surprise.",
  },

  swiftRunner: {
    name: "The Swift Runner",
    key: "swift-runner",
    order: 11,
    grasp: 1,
    flavor:
      "Those who attempted to confront the greatest of the Greeks merely met his spear.",
  },

  eternity: {
    name: "Eternity",
    key: "eternity",
    order: 12,
    grasp: 4,
    flavor:
      "The inevitable cannot be prevented, though perhaps can be forestalled.",
  },

  centaur: {
    name: "The Centaur",
    key: "centaur",
    order: 13,
    grasp: 0,
    flavor:
      "Many of the greatest heroes mortalkind has to offer have in common his patient instruction.",
  },

  origination: {
    name: "Origination",
    key: "origination",
    order: 14,
    grasp: 5,
    flavor:
      "From the infinite void emerged all that exists, and back to that void it all may yet return.",
  },

  lovers: {
    name: "The Lovers",
    key: "lovers",
    order: 15,
    grasp: 3,
    flavor:
      "Their music brought them together, and not even Death could keep them apart for long.",
  },

  fates: {
    name: "The Fates",
    key: "fates",
    order: 16,
    grasp: 3,
    flavor:
      "Even the gods themselves are subject to the whims of the three weavers of destiny.",
  },

  boatman: {
    name: "The Boatman",
    key: "boatman",
    order: 17,
    grasp: 5,
    flavor:
      "Vast riches lie hidden in the realm of the dead; but only a modest fee is needed to get in.",
  },
  artificer: {
    name: "The Artificer",
    key: "artificer",
    order: 18,
    grasp: 3,
    flavor:
      "Few can turn raw materials into works of extraordinary genius; none as can he.",
  },

  excellence: {
    name: "Excellence",
    key: "excellence",
    order: 19,
    grasp: 5,
    flavor:
      "Not even gods can always live to their fullest purpose; yet mortals all must strive.",
  },

  queen: {
    name: "The Queen",
    key: "queen",
    order: 20,
    grasp: 0,
    flavor:
      "From Olympus she descends to reign in the Underworld, as the surface-land grows cold.",
  },

  seer: {
    name: "The Seer",
    key: "seer",
    order: 21,
    grasp: 0,
    flavor:
      "Having been stricken blind, she saw much more than any mortal could.",
  },

  champions: {
    name: "The Champions",
    key: "champions",
    order: 22,
    grasp: 4,
    flavor:
      "Once-mortal foes, they found each other once again in death, and were exalted in Elysium.",
  },

  strength: {
    name: "Strength",
    key: "strength",
    order: 23,
    grasp: 4,
    flavor:
      "The power to surpass the might of the gods is one that must always be held in check.",
  },

  divinity: {
    name: "Divinity",
    key: "divinity",
    order: 24,
    grasp: 0,
    flavor:
      "The privilege of godhood is bestowed at birth, save for the rarest cases, when it is earned instead.",
  },

  judgment: {
    name: "Judgment",
    key: "judgment",
    order: 25,
    grasp: 0,
    flavor:
      "The Underworld King is to decide what shall become of each and every mortal life.",
  },
};

export { arcanaData as DbArcana };
