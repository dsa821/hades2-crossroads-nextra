import { FC } from "react";

type TextHighlightProps = {
  type: Rarity;
};

type Rarity = "common" | "rare" | "epic" | "heroic" | "legendary" | "duo";

function getClassName(type: Rarity) {
  switch(type) {
    case "rare":
      return "text-blue-500";
    case "epic":
      return "text-violet-700";
    case "heroic":
      return "text-rose-500";
    case "legendary":
      return "text-amber-500";
    case "duo":
      return "text-lime-500";
  }
}

export const TextHighlight: FC<TextHighlightProps> = ({ type, children }) => {
  return <span className={getClassName(type)}>{children}</span>;
};
