import { mapBoonToCodex } from "lib/utils";
import { BoonData, Rarity } from "models/types";

import { CodexEntry, CodexGrid } from "./Codex";

type BoonProps = {
  boon: BoonData;
  compact: boolean;
  disableLink?: boolean;
  hrefOverride?: string;
  className?: string;
  children?: React.ReactNode;
};
export const Boon: React.FC<BoonProps> = ({ boon, ...props }) => {
  const scalableTypes: Rarity[] = ["common", "rare", "epic", "heroic"];
  const isScalable = scalableTypes.includes(boon.type) || boon.type == null;

  return (
    <CodexEntry data={mapBoonToCodex(boon)} {...props}>
      {boon.desc && <div className="mt-4 text-lg">{boon.desc}</div>}
      {boon.scaleLabel && (
        <ul className="mt-4 list-disc ml-6 text-lg">
          <li>
            {boon.scaleLabel}:{" "}
            <span className={`font-bold ${isScalable ? "text-green-400" : ""}`}>
              {boon.scaleValue}
            </span>
            {boon.scaleRate && (
              <span className="italic text-gray-300 text-sm ml-1">
                {typeof boon.scaleRate === "number" ? (
                  <>(every {boon.scaleRate} Sec.)</>
                ) : (
                  <>{boon.scaleRate}</>
                )}
              </span>
            )}
          </li>
        </ul>
      )}

      {boon.descExtra && <div className="mt-4">{boon.descExtra}</div>}

      {props.children}
    </CodexEntry>
  );
};

type BoonGridProps = {
  boons: BoonData[];
  className?: string;
};
export const BoonGrid: React.FC<BoonGridProps> = ({ boons, ...props }) => {
  return <CodexGrid data={boons.map(mapBoonToCodex)} {...props} />;
};
