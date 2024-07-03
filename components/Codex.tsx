import Link from "next/link";
import Tippy from "@tippyjs/react";

import { CodexData, Rarity } from "models/types";
import { TextHighlight } from "./TextHighlight";
import Image from "next/image";
import { getRarityBorderColor } from "lib/utils";
import { Box } from "./Box";

type CodexEntryProps = {
  data: CodexData;
  compact?: boolean;
  disableLink?: boolean;
  hrefOverride?: string;
  children?: React.ReactNode;
  className?: string;
};

export const CodexEntry: React.FC<CodexEntryProps> = ({
  data,
  compact = false,
  disableLink = false,
  hrefOverride,
  ...props
}) => {
  const mainIcon = (
    <div className="relative">
      {data.extraIcon && (
        <div className="absolute -top-4 -right-4">{data.extraIcon}</div>
      )}
      <IconCodexBase data={data} />
    </div>
  );
  const name = <TextHighlight type={data.type}>{data.name}</TextHighlight>;

  const scalableTypes: Rarity[] = ["common", "rare", "epic", "heroic"];
  const isScalable = scalableTypes.includes(data.type) || data.type == null;
  const scaleContent = data.scaleLabel && (
    <ul className="mt-4 list-disc ml-6">
      <li>
        {data.scaleLabel}:{" "}
        <span className={`font-bold ${isScalable ? "text-green-400" : ""}`}>
          {data.scaleValue}
        </span>
        {data.scaleRate && (
          <span className="italic text-gray-300 text-sm ml-1">
            {typeof data.scaleRate === "number" ? (
              <>(every {data.scaleRate} Sec.)</>
            ) : (
              <>{data.scaleRate}</>
            )}
          </span>
        )}
      </li>
    </ul>
  );

  if (compact) {
    const compactContent = (
      <div className="flex flex-col items-center px-2 py-2">
        {data.iconUrl && (
          <Tippy
            content={
              <>
                <div className="text-base">{data.desc}</div>
                {scaleContent}
              </>
            }
          >
            {mainIcon}
          </Tippy>
        )}
        <div className="text-center font-bold text-lg mt-2 leading-tight">
          {name}
        </div>
      </div>
    );
    return disableLink ? (
      <>{compactContent}</>
    ) : (
      <Link href={hrefOverride ?? data.href}>{compactContent}</Link>
    );
  }

  return (
    <Box className={props.className}>
      <div className="flex">
        <div className="flex-1">
          {data.name != null && (
            <div className="flex items-center gap-4">
              {data.iconUrl && mainIcon}

              <div className="font-semibold text-3xl font-small-caps flex-1">
                {name}
              </div>
            </div>
          )}

          {data.desc && <div className="mt-4">{data.desc}</div>}
          {scaleContent}
          {data.descExtra && <div className="mt-4">{data.descExtra}</div>}

          {props.children}

          {data.flavor && (
            <div className="mt-2 italic font-semibold drop-shadow-lg text-indigo-500">
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
  className?: string;
};
export const CodexGrid: React.FC<CodexGridProps> = ({ data, className }) => {
  return (
    <div
      className={`grid grid-cols-3 lg:grid-cols-6 gap-1 items-stretch ${
        className || ""
      }`}
    >
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
      width={size}
      height={size}
      className={`inline rounded-3xl border-[3px] ${iconClassNames}`}
    />
  );
};
