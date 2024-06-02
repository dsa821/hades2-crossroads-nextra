import { BoonGrid } from "./Boon";
import { Box } from "./Box";
import { CodexGrid } from "./Codex";

const Build = ({ children, className }) => {
  return <div className={`flex flex-col gap-4 ${className}`}>{children}</div>;
};

// Declaring this separately to get strong typing
const Keepsakes = ({ data }) => {
  return (
    <Box>
      <div className="font-header font-bold text-xl">Keepsakes</div>
      <CodexGrid data={data} />
    </Box>
  );
};

const Moves = ({ children }) => {
  return <Box>{children}</Box>;
};

const MovesCore = ({ data }) => {
  return (
    <div>
      <div className="font-header font-bold text-xl">Required Boons</div>
      <BoonGrid boons={data} />
    </div>
  );
};

const MovesSupport = ({ data }) => {
  return (
    <div>
      <div className="font-header font-bold text-xl">Optional Boons</div>
      <BoonGrid boons={data} />
    </div>
  );
};

const Hammers = ({ data }) => {
  return (
    <Box>
      <div className="font-header font-bold text-xl">Hammers</div>
      <CodexGrid data={data} />
    </Box>
  );
};

const Arcana = ({ children }) => {
  return (
    <Box>
      <div className="font-header font-bold text-xl">Arcana</div>
      <div>{children}</div>
    </Box>
  );
};

Build.Keepsakes = Keepsakes;

Moves.Core = MovesCore;
Moves.Support = MovesSupport;
Build.Moves = Moves;

Build.Hammers = Hammers;
Build.Arcana = Arcana;

export { Build };
