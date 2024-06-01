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

export type HammerData = {
  name: string;
  key: string;
  weaponKey: string;
}

export type CodexData = {
  name: string;
  type: Rarity;
  href: string;
  iconUrl?: string;
  extraIcon?: React.ReactNode;
  flavor?: string;
}
