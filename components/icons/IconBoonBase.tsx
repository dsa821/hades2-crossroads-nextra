import { FC } from "react";

import { IconBase } from "./IconBase";
import { getRarityBorderColor } from "lib/utils";
import { Rarity } from "models/types";

type IconBoonBaseProps = {
  iconKey: string;
  alt: string;
  size: number;
  type: Rarity;
};

export const IconBoonBase: FC<IconBoonBaseProps> = ({ iconKey, alt, size = 60, type }) => {
  const classNames = getRarityBorderColor(type);

  return (
    <IconBase
      iconKey={`boons/${iconKey}`}
      size={size}
      alt={alt}
      className={`rounded-xl border-[3px] ${classNames}`}
    />
  );
};
