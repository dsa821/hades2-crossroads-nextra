import { FC } from "react";
import { Rarity } from "models/types";
import { getRarityTextColor } from "lib/utils";

type TextHighlightProps = {
  type: Rarity;
};

export const TextHighlight: FC<TextHighlightProps> = ({ type, children }) => {
  const classNames = getRarityTextColor(type);

  return (
    <span className={`drop-shadow-lg ${classNames}`}>{children}</span>
  );
};
