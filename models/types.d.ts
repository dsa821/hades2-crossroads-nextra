export type Rarity =
  | "common"
  | "rare"
  | "epic"
  | "heroic"
  | "legendary"
  | "duo"
  | "infusion";

export type BoonElement = "water" | "earth" | "fire" | "air";
export type God =
  | "aphrodite"
  | "apollo"
  | "artemis"
  | "demeter"
  | "hephaestus"
  | "hera"
  | "hermes"
  | "hestia"
  | "poseidon"
  | "zeus";

export type BoonData = {
  title: string;
  god: God;
  key: string;
  type?: Rarity;
  element: BoonElement;
  flavor?: string;
};
