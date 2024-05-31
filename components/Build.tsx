import { FC } from "react";

const Build: FC = ({ children, className }) => {
  return (
    <div className={`card-bg ${className}`}>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

// Declaring this separately to get strong typing
const Keepsakes: FC = ({ children }) => {
  return (
    <div className="flex items-baseline gap-2">
      <div className="font-bold w-24">Keepsakes:</div>
      <div>{children}</div>
    </div>
  );
};

const Moves: FC = ({ children }) => {
  return (
    <div className="flex items-baseline gap-2">
      <div className="font-bold w-24">Boons: </div>
      <div className="flex items-start gap-8">{children}</div>
    </div>
  );
};

const MovesCore: FC = ({ children }) => {
  return (
    <div>
      <div className="font-bold">Core</div>
      <div>{children}</div>
    </div>
  );
};

const MovesSupport: FC = ({ children }) => {
  return (
    <div>
      <div className="font-bold">Support</div>
      <div>{children}</div>
    </div>
  );
};

const Hammers: FC = ({ children }) => {
  return (
    <div className="flex items-baseline gap-2">
      <div className="font-bold w-24">Hammers: </div>
      <div>{children}</div>
    </div>
  );
};

const Arcana: FC = ({ children }) => {
  return (
    <div className="flex items-baseline gap-2">
      <div className="font-bold w-24">Arcana: </div>
      <div>{children}</div>
    </div>
  );
};

Build.Keepsakes = Keepsakes;

Moves.Core = MovesCore;
Moves.Support = MovesSupport;
Build.Moves = Moves;

Build.Hammers = Hammers;
Build.Arcana = Arcana;

export { Build };
