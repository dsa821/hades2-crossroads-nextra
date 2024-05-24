import { FC } from "react";

import { IconGrasp } from "./icons";

type ArcanaProps = {
  title: string;
  grasp: number;
  flavor: string;
};

export const Arcana: FC<ArcanaProps> = (props) => {
  return (
    <div
      className={`card-bg ${props.className}`}
    >
      {props.title != null && (
        <div className="font-bold text-2xl">{props.title}</div>
      )}
      <div className="flex justify-between items-start gap-4">
        <div>
          {props.children}

          <div className="mt-2 italic font-bold text-sm drop-shadow-lg text-indigo-500">
            {props.flavor}
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="font-bold text-xl">{props.grasp}</div>
          <IconGrasp />
        </div>
      </div>
    </div>
  );
};
