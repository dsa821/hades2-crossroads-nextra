import Link from "next/link";

import { CodexData } from "models/types";
import { TextHighlight } from "./TextHighlight";
import Image from "next/image";
import { getRarityBorderColor } from "lib/utils";
import { Box } from "./Box";

type CodexEntryProps = {
  data: CodexData;
  compact: boolean;
  hrefOverride?: string;
  children?: React.ReactNode;
  className?: string;
};

export const CodexEntry: React.FC<CodexEntryProps> = ({
  data,
  compact,
  hrefOverride,
  ...props
}) => {
  const mainIcon = <IconCodexBase data={data} />;
  const nameHighlight = (
    <TextHighlight type={data.type}>{data.name}</TextHighlight>
  );

  if (compact) {
    return (
      <Link
        href={hrefOverride ?? data.href}
        className="flex flex-col gap-2 items-center"
      >
        {mainIcon}
        <div className="text-center font-bold text-xl small-caps">
          {nameHighlight}
        </div>
      </Link>
    );
  }

  return (
    <Box className={props.className}>
      <div className="flex">
        <div className="flex-1">
          {data.name != null && (
            <div className="flex items-center gap-4">
              {mainIcon}

              <div className="font-bold text-3xl small-caps tracking-wide flex-1">
                {nameHighlight}
              </div>

              {data.extraIcon}
            </div>
          )}
          {props.children}

          {data.flavor && (
            <div className="mt-2 italic font-bold text-sm drop-shadow-lg text-indigo-500">
              {data.flavor}
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};

//
type CodexGridProps = {
  data: CodexData[];
};
export const CodexGrid: React.FC<CodexGridProps> = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-4 gap-4 items-start">
      {data.map((d) => {
        return <CodexEntry key={`${d.name}`} data={d} compact />;
      })}
    </div>
  );
};

type IconCodexBaseProps = {
  data: CodexData;
  size?: number;
};

export const IconCodexBase: React.FC<IconCodexBaseProps> = ({
  data,
  size = 72,
}) => {
  const iconClassNames = getRarityBorderColor(data.type);

  return (
    <Image
      src={`/icons${data.iconUrl}`}
      alt={data.name}
      title={data.name}
      width={size}
      height={size}
      className={`inline rounded-3xl border-[3px] ${iconClassNames}`}
    />
  );
};
