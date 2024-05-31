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
  | "zeus"
  | "duos";

export type BoonData = {
  name: string;
  key: string;
  god: God;
  type?: Rarity;
  element?: BoonElement;
  flavor?: string;
};

export type CodexData = {
  name: string;
  type: Rarity;
  iconUrl: string;
  href: string;
  extraIcon: React.ReactNode;
  flavor?: string;
}
