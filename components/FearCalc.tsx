import { DbFear } from "db";

type Props = {};
export const FearCalc: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {Object.values(DbFear).map((fear) => {
        return (
          <div>
            <div>{fear.name}</div>
            <fear.desc scaleValues={fear.scaleValues}></fear.desc>
          </div>
        );
      })}
    </div>
  );
};
