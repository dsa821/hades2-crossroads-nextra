import { FC } from "react";
import Image from "next/image";

type IconProps = {
  iconKey: string;
  alt: string;
  size: number;
};

export const IconBase: FC<IconProps> = ({
  iconKey,
  alt,
  size = 24,
  className,
}) => {
  if (iconKey == null) return;
  if (alt == null) {
    const split = iconKey.split("-");
    alt = split.map((x) => x[0].toUpperCase() + x.slice(1)).join(" ");
  }

  return (
    <Image
      src={`/icons/${iconKey}.png`}
      alt={alt}
      title={alt}
      width={size}
      height={size}
      className={`inline ${className}`}
    />
  );
};
