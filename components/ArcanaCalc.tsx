import { useState } from "react";
import { sumBy } from "lodash-es";

import { ArcanaData } from "models/types";
import { Arcana } from "./Arcana";
import { DbArcana } from "db";

export const ArcanaCalc: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<ArcanaData[]>([]);
  const graspCount = sumBy(selectedCards, (x) => x.grasp);

  function handleClick(card: ArcanaData) {
    if (selectedCards.find((x) => x.name === card.name)) {
      setSelectedCards(selectedCards.filter((x) => x.name !== card.name));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  }

  function reset() {
    setSelectedCards([]);
  }

  return (
    <div>
      <div className="flex gap-8 items-center justify-between">
        <button type="button" className="btn-default" onClick={reset}>
          Reset
        </button>
        <div className="font-bold ">
          <span
            className={`text-4xl ${
              graspCount < 30 ? "text-emerald-500" : "text-red-700"
            }`}
          >
            {graspCount}
          </span>{" "}
          <span className="text-2xl">/ 30</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-5 md:gap-4 gap-x-2 md:max-w-[800px]">
          {Object.values(DbArcana).map((arcana) => {
            const isSelected =
              selectedCards.find((x) => x.name === arcana.name) != null;
            return (
              <ArcanaSelect
                data={arcana}
                selected={isSelected}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

type ArcanaSelectProps = {
  data: ArcanaData;
  selected: boolean;
  onClick: (card: ArcanaData) => void;
};
const ArcanaSelect: React.FC<ArcanaSelectProps> = ({
  data,
  selected,
  onClick,
}) => {
  // const [selected, setSelected] = useState(false);

  function handleClick() {
    // const newSelected = !selected;
    // setSelected(newSelected);
    // update grasp count based on selection
    // updateGraspCount(newSelected ? data.grasp : -data.grasp);
  }

  return (
    <div
      className={`cursor-pointer transition ${!selected && "opacity-25"}`}
      onClick={() => onClick(data)}
    >
      <Arcana data={data} compact />
    </div>
  );
};
