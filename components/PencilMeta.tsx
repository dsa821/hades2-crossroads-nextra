import  { cloneElement, useState } from "react";
import {
  IconAphrodite,
  IconApollo,
  IconDemeter,
  IconHephaestus,
  IconHera,
  IconHestia,
  IconPoseidon,
  IconZeus,
} from "./icons";
import { BoonData } from "models/types";

import { DbBoons } from "db/boons";
import { BoonTest } from "./Boon";
import { Box } from "./Box";

const godData: {
  god: string;
  icon: React.ReactNode;
  boons: Record<string, BoonData>;
}[] = [
  {
    god: "zeus",
    icon: <IconZeus />,
    boons: DbBoons.Zeus,
  },
  {
    god: "hera",
    icon: <IconHera />,
    boons: DbBoons.Hera,
  },
  {
    god: "poseidon",
    icon: <IconPoseidon />,
    boons: DbBoons.Poseidon,
  },
  {
    god: "demeter",
    icon: <IconDemeter />,
    boons: DbBoons.Demeter,
  },
  {
    god: "apollo",
    icon: <IconApollo  />,
    boons: DbBoons.Apollo,
  },
  {
    god: "aphrodite",
    icon: <IconAphrodite />,
    boons: DbBoons.Aphrodite,
  },
  {
    god: "hephaestus",
    icon: <IconHephaestus />,
    boons: DbBoons.Hephaestus,
  },
  {
    god: "hestia",
    icon: <IconHestia />,
    boons: DbBoons.Hestia,
  },
];

export const PencilMeta: React.FC = () => {
  const [selectedGods, setSelectedGods] = useState<string[]>([]);

  function handleClick(god: string) {
    if (selectedGods.includes(god)) {
      setSelectedGods(selectedGods.filter((x) => x !== god));
    } else {
      setSelectedGods([...selectedGods, god]);
    }
  }

  function reset() {
    setSelectedGods([]);
  }

  return (
    <div>
      <button type="button" className="btn-default" onClick={reset}>
        Reset
      </button>

      <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
        {godData.map((x) => {
					const godIcon = cloneElement(x.icon, { size: 72 });
          return (
            <GodSelect
              key={x.god}
              god={x.god}
              selected={selectedGods.includes(x.god)}
              onClick={handleClick}
            >
              {godIcon}
            </GodSelect>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {selectedGods.map((god) => {
          const data = godData.find((x) => x.god === god);
          return (
            <Box>
              <div className="text-3xl font-greek mb-2">{god}</div>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-1 items-stretch">
                {Object.values(data.boons).map((d) => (
                  <BoonSelect boon={d} />
                ))}
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
};

type GodSelectProps = {
  god: string;
  selected: boolean;
  onClick: (god: string) => void;
  children: React.ReactNode;
};
const GodSelect: React.FC<GodSelectProps> = ({
  god,
  selected,
  onClick,
  children,
}) => {
  return (
    <div
      className={`cursor-pointer transition ${!selected && "opacity-25"}`}
      onClick={() => onClick(god)}
    >
      {children}
    </div>
  );
};

type BoonSelectProps = {
  boon: BoonData;
};
const BoonSelect: React.FC<BoonSelectProps> = ({ boon }) => {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!selected);
  }

  return (
    <div
      className={`cursor-pointer transition ${selected && "opacity-25"}`}
      onClick={handleClick}
    >
      <BoonTest boon={boon} compact disableLink />
    </div>
  );
};
