import { FC } from "react";
import { Rarity } from "models/types";

type TextHighlightProps = {
  type: Rarity;
};

function getClassName(type: Rarity) {
  switch (type) {
    case "rare":
      return "text-blue-500";
    case "epic":
      return "text-violet-700";
    case "heroic":
      return "text-rose-500";
    case "legendary":
      return "text-amber-600";
    case "duo":
      return "text-lime-500";
  }
}

export const TextHighlight: FC<TextHighlightProps> = ({ type, children }) => {
  return (
    <span className={`drop-shadow-lg ${getClassName(type)}`}>{children}</span>
  );
};
