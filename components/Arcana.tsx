import Image from "next/image";
import { Box } from "./Box";
import { IconGrasp } from "./icons";
import { ArcanaData } from "models/types";

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
  const iconUrl = `/icons/arcana/${orderStr}-${data.key}.png`;

  // Full view
  return (
    <div className="flex flex-wrap items-start gap-4">
      <div className="w-full lg:w-36 flex justify-center">
        <Image
          src={iconUrl}
          alt={data.name}
          title={data.name}
          width={144}
          height={192}
          className={className}
        />
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

        {children}

        <div className="mt-2 italic font-semibold drop-shadow-lg text-indigo-500">
          {data.flavor}
        </div>
      </Box>
    </div>
  );
};
