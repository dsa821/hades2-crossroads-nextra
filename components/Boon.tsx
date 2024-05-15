import { FC } from "react";
import { Rarity } from "models/types";
import { TextHighlight } from "./TextHighlight";

type BoonProps = {
  title: string;
  rarity: Rarity;
};

export const Boon: FC<BoonProps> = (props) => {
  return (
    <div className={`bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded p-4 ${props.className}`}>
      {props.title != null && (
        <div className='font-bold text-2xl'>
          <TextHighlight type={props.rarity}>{props.title}</TextHighlight>
        </div>
      )}
      {props.children}
    </div>
  );
};
