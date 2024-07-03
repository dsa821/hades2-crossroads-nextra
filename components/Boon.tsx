import { mapBoonToCodex } from "lib/utils";
import { BoonData } from "models/types";

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
  return <CodexGrid data={boons.map(mapBoonToCodex)} {...props} />;
};
