import { FC } from "react";
import { Rarity } from "models/types";
import { TextHighlight } from "./TextHighlight";

type BoonProps = {
  title: string;
  rarity: Rarity;
};

export const Boon: FC<BoonProps> = (props) => {
  return (
    <div className="bg-slate-800 text-white rounded p-4">
      {props.title != null && (
        <div className='font-bold text-2xl'>
          <TextHighlight type={props.rarity}>{props.title}</TextHighlight>
        </div>
      )}
      {props.children}
    </div>
  );
};
