import { Arcana } from "./Arcana";
import { DbArcana } from "db";

export const ArcanaCalc: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-5 gap-2 max-h-[75lvh] max-w-[600px]">
        {Object.values(DbArcana).map((arcana) => {
          return <Arcana data={arcana} compact />;
        })}
      </div>
    </div>
  );
};
