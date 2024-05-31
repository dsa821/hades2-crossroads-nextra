import { mapBoonToCodex } from "lib/utils";
import { BoonData, BoonElement, Rarity } from "models/types";

import { Box } from "./Box";
import { CodexEntry, CodexGrid } from "./Codex";
import { TextHighlight } from "./TextHighlight";
import { IconBase } from "./icons/IconBase";
import { IconBoonBase } from "./icons/IconBoonBase";

type BoonProps = {
  title: string;
  type: Rarity;
  iconKey: string;
  flavor: string;
  element: BoonElement;
  className: string;
  children?: React.ReactNode;
};

export const Boon: React.FC<BoonProps> = (props) => {
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

              <div className="font-bold text-3xl font-small-caps tracking-wide flex-1">
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
  disableLink?: boolean;
  hrefOverride?: string;
  className?: string;
  children?: React.ReactNode;
};
export const BoonTest: React.FC<BoonTestProps> = ({ boon, ...props }) => {
  return (
    <CodexEntry data={mapBoonToCodex(boon)} {...props}>
      {props.children}
    </CodexEntry>
  );
};

type BoonGridProps = {
  boons: BoonData[];
  className?: string;
};
export const BoonGrid: React.FC<BoonGridProps> = ({ boons, ...props }) => {
  return <CodexGrid data={boons.map(mapBoonToCodex)}  {...props} />;
};
