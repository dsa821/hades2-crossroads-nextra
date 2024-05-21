import { FC } from "react";
import Image from "next/image";

type IconProps = {
	fileName: string;
	alt: string;
	size: number;
}

export const IconBase: FC<IconProps> = ({ fileName, alt, size = 24 }) => {
	return (
    <Image
      src={`/icons/${fileName}.png`}
      alt={alt}
      title={alt}
      width={size}
      height={size}
      className="inline"
    />
  );
}