import { FC } from "react";
import Link from "next/link";

import { BoonData, BoonElement, Rarity } from "models/types";
import { Box } from "./Box";
import { TextHighlight } from "./TextHighlight";
import { IconBase } from "./icons/IconBase";
import { IconBoonBase } from "./icons/IconBoonBase";

type BoonProps = {
  title: string;
  type: Rarity;
  iconKey: string;
  flavor: string;
  element: BoonElement;
};

export const Boon: FC<BoonProps> = (props) => {
  return (
    <Box className={props.className}>
      <div className="flex">
        <div className="flex-1">
          {props.title != null && (
            <div className="flex items-center gap-4">
              {props.iconKey != null && (
                <IconBoonBase
                  iconKey={props.iconKey}
                  alt={props.title}
                  type={props.type}
                />
              )}

              <div className="font-bold text-3xl small-caps tracking-wide flex-1">
                <TextHighlight type={props.type}>{props.title}</TextHighlight>
              </div>

              {props.element != null && (
                <div>
                  <IconBase iconKey={props.element} size={28} />
                </div>
              )}
            </div>
          )}
          {props.children}

          {props.flavor && (
            <div className="mt-2 italic font-bold text-sm drop-shadow-lg text-indigo-500">
              {props.flavor}
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};

type BoonTestProps = {
  boon: BoonData;
  compact: boolean;
  linkOverride?: string;
};
export const BoonTest: FC<BoonTestProps> = ({
  boon,
  compact,
  linkOverride,
  ...props
}) => {
  const iconKey = `${boon.god}/${boon.key}`;
  const boonIcon = (
    <IconBoonBase iconKey={iconKey} alt={boon.name} type={boon.type} />
  );
  const boonNameHighlight = (
    <TextHighlight type={boon.type}>{boon.name}</TextHighlight>
  );

  if (compact) {
    const link = linkOverride ?? `${boon.god}#${boon.key}`;
    return (
      <Link
        href={`/boons/${link}`}
        className="flex flex-col gap-2 items-center w-28"
      >
        <div>{boonIcon}</div>
        <div className="text-center font-bold text-lg small-caps">
          {boonNameHighlight}
        </div>
      </Link>
    );
  }

  return (
    <Box className={props.className}>
      <div className="flex">
        <div className="flex-1">
          {boon.name != null && (
            <div className="flex items-center gap-4">
              {iconKey != null && boonIcon}

              <div className="font-bold text-3xl small-caps tracking-wide flex-1">
                {boonNameHighlight}
              </div>

              {boon.element != null && (
                <div>
                  <IconBase iconKey={boon.element} size={28} />
                </div>
              )}
            </div>
          )}
          {props.children}

          {boon.flavor && (
            <div className="mt-2 italic font-bold text-sm drop-shadow-lg text-indigo-500">
              {boon.flavor}
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};
