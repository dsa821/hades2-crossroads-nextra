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

export type ArcanaData = {
  name: string;
  key: string;
  order: number;
  flavor: string;
  grasp: number;
  desc?: React.ReactNode;
  awakening?: React.ReactNode;
};

export type AspectData = {
  name: string;
  key: string;
  weaponKey: string;
  flavor: string;
};

export type BoonData = {
  name: string;
  key: string;
  god: God;
  type?: Rarity;
  element?: BoonElement;
  flavor?: string;
  desc?: React.ReactNode;
  scaleLabel?: React.ReactNode;
  scaleValue?: any;
  scaleRate?: number | React.ReactNode;
  descExtra?: React.ReactNode;
};

export type HammerData = {
  name: string;
  key: string;
  weaponKey: string;
};

export type KeepsakeData = {
  name: string;
  key: string;
  flavor: string;
};

export type CodexData = {
  name: string;
  type: Rarity;
  href: string;
  iconUrl?: string;
  extraIcon?: React.ReactNode;
  flavor?: string;

  desc?: React.ReactNode;
  scaleLabel?: React.ReactNode;
  scaleValue?: any;
  scaleRate?: number | React.ReactNode;
  descExtra?: React.ReactNode;
};
