import { FC } from "react";
import { BoonElement, Rarity } from "models/types";
import { TextHighlight } from "./TextHighlight";
import { IconBase } from "./icons/IconBase";

type BoonProps = {
  title: string;
  rarity: Rarity;
  flavor: string;
  element: BoonElement;
};

export const Boon: FC<BoonProps> = (props) => {
  return (
    <div
      className={`relative bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded p-4 ${props.className}`}
    >
      <div className="flex">
        <div className="flex-1">
          {props.title != null && (
            <div className="font-bold text-2xl">
              <TextHighlight type={props.rarity}>{props.title}</TextHighlight>
            </div>
          )}
          {props.children}

          {props.flavor && (
            <div className="mt-2 italic font-bold text-sm drop-shadow-lg text-indigo-500">
              {props.flavor}
            </div>
          )}
        </div>

        {props.element != null && (
          <div>
            <IconBase iconKey={props.element} size={28} />
          </div>
        )}
      </div>
    </div>
  );
};
