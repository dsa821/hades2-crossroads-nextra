import Image from "next/image";
import Tippy from "@tippyjs/react";

import { Box } from "../Box";
import { IconGrasp } from "../icons";
import { ArcanaData } from "models/types";

import styles from "./styles.module.css";

type ArcanaProps = {
  data: ArcanaData;
  compact: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Arcana: React.FC<ArcanaProps> = ({
  data,
  compact,
  className,
  children,
}) => {
  const orderStr = `${data.order < 10 ? "0" : ""}${data.order}`;
  const imageUrl = `/icons/arcana/${orderStr}-${data.key}.png`;
  const image = (
    <Image
      src={imageUrl}
      alt={data.name}
      fill
      sizes="144px"
      className={className}
    />
  );

  if (compact) {
    return (
      <div className="flex justify-center">
        <Tippy
          appendTo="parent"
          delay={500}
          content={
            <>
              <div className="font-bold text-lg font-small-caps">
                {data.name}
              </div>
              <div className="mt-2">{data.desc}</div>
            </>
          }
        >
          <div className="relative w-24 aspect-[3/4]">{image}</div>
        </Tippy>
      </div>
    );
  }
  // Full view
  return (
    <div className="flex flex-wrap items-start gap-4">
      <div className=" w-full lg:w-36 flex justify-center">
        <div className="relative w-36 h-48">{image}</div>
      </div>

      <Box className="flex-1">
        <div className="flex items-center">
          <div className="font-semibold text-3xl font-small-caps flex-1">
            {data.name}
          </div>
          <div className="flex items-center gap-1">
            <div className="font-bold text-xl">{data.grasp}</div>
            <IconGrasp />
          </div>
        </div>

        {data.desc && <div className="mt-4">{data.desc}</div>}
        {data.awakening && (
          <div className="mt-2">
            <span className="font-bold">Awakening:</span>{" "}
            <span className={`italic ${styles.link}`}>{data.awakening}</span>
          </div>
        )}
        {children}

        <div className="mt-2 italic font-semibold drop-shadow-lg text-indigo-500">
          {data.flavor}
        </div>
      </Box>
    </div>
  );
};
