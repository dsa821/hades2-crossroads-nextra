import {
  BoonData,
  CodexData,
  HammerData,
  KeepsakeData,
  Rarity,
} from "models/types";
import { IconBase } from "components/icons/IconBase";

export function getRarityTextColor(type: Rarity): string {
  switch (type) {
    case "rare":
      return "text-blue-500";
    case "epic":
      return "text-violet-500";
    case "heroic":
      return "text-rose-500";
    case "legendary":
      return "text-amber-600";
    case "duo":
      return "text-lime-500";

    case "infusion":
      return "text-fuchsia-500";
  }
}

export function getRarityBorderColor(type: Rarity): string {
  switch (type) {
    case "common":
      return "border-slate-500";
    case "rare":
      return "border-blue-500";
    case "epic":
      return "border-violet-500";
    case "heroic":
      return "border-rose-500";
    case "legendary":
      return "border-amber-600";
    case "duo":
      return "border-lime-500";

    case "infusion":
      return "border-fuchsia-500";

    default:
      return "border-slate-500";
  }
}

export function mapBoonToCodex(boon: BoonData): CodexData {
  return {
    name: boon.name,
    type: boon.type,

    iconUrl: `/boons/${boon.god}/${boon.key}.png`,
    href: `/boons/${boon.god}#${boon.key}`,

    flavor: boon.flavor,
    extraIcon: <IconBase iconKey={boon.element} size={42} />,
  } as CodexData;
}

export function mapHammerToCodex(hammer: HammerData): CodexData {
  return {
    name: hammer.name,

    iconUrl: `/hammers/${hammer.weaponKey}/${hammer.key}.png`,
    href: `/weapons/${hammer.weaponKey}/hammers#${hammer.key}`,
  } as CodexData;
}

export function mapKeepsakeToCodex(keepsake: KeepsakeData): CodexData {
  return {
    name: keepsake.name,
    type: "epic",

    iconUrl: `/keepsakes/${keepsake.key}.png`,
    href: `/keepsakes#${keepsake.key}`,
  } as CodexData;
}
