import { mapHammerToCodex } from "lib/utils";
import { HammerData } from "models/types";

import { CodexEntry, CodexGrid } from "./Codex";

type HammerProps = {
  hammer: HammerData;
  compact: boolean;
  disableLink?: boolean;
  hrefOverride?: string;
  className?: string;
  children?: React.ReactNode;
};
export const Hammer: React.FC<HammerProps> = ({ hammer, ...props }) => {
  return (
    <CodexEntry data={mapHammerToCodex(hammer)} {...props}>
      {props.children}
    </CodexEntry>
  );
};

type HammerGridProps = {
  hammers: HammerData[];
  className?: string;
};
export const HammerGrid: React.FC<HammerGridProps> = ({
  hammers,
  ...props
}) => {
  return <CodexGrid data={hammers.map(mapHammerToCodex)} {...props} />;
};
