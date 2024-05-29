import { BoonData, CodexData, Rarity } from "models/types";
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
    extraIcon: <IconBase iconKey={boon.element} size={32} />
  } as CodexData;
}