import { groupBy } from "lodash-es";
import { BoonData } from "models/types";
import { IconAir, IconEarth, IconFire, IconWater } from "./icons";

type ElementSummaryProps = {
  boons: BoonData[];
};

export const ElementSummary: React.FC<ElementSummaryProps> = ({ boons }) => {
  const iconSize = 48;
  const elements = groupBy(boons, (x) => x.element);

  return (
    <div className="mt-4">
      {/* <div className="font-semibold text-2xl font-header">Elements</div> */}
      <div className="flex gap-4">
        <ElementItem
          count={elements.water?.length ?? 0}
          icon={<IconWater size={iconSize} />}
        />

        <ElementItem
          count={elements.earth?.length ?? 0}
          icon={<IconEarth size={iconSize} />}
        />

        <ElementItem
          count={elements.fire?.length ?? 0}
          icon={<IconFire size={iconSize} />}
        />

        <ElementItem
          count={elements.air?.length ?? 0}
          icon={<IconAir size={iconSize} />}
        />
      </div>
    </div>
  );
};

const ElementItem = ({ count, icon }) => {
  return (
    <div className="flex items-center">
      <span className="font-bold text-2xl">{count}</span>
      {icon}
    </div>
  );
};
