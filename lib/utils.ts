import { Rarity } from "models/types";

export function getRarityTextColor(type: Rarity) {
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

export function getRarityBorderColor(type: Rarity) {
  switch (type) {
		case "common":
			return "border-white";
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
  }
}
