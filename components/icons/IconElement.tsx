import { FC } from "react";

import { BoonElement } from "models/types";
import { IconBase } from "./IconBase";

type IconElementProps = {
  element: BoonElement;
  size?: number;
};

export const IconElement: FC<IconElementProps> = ({ element, size = 24 }) => {
  if (element == null) return;

  const alt = element[0]?.toUpperCase() + element?.slice(1);
  return <IconBase fileName={element} alt={alt} size={size} />;
};
