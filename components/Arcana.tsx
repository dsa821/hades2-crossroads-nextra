import { FC } from "react";

import { TextHighlight } from "./TextHighlight";

type ArcanaProps = {
  title: string;
  grasp: number;
  flavor: string;
};

export const Arcana: FC<ArcanaProps> = (props) => {
  return (
    <div
      className={`bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded p-4 ${props.className}`}
    >
      {props.title != null && (
        <div className='font-bold text-2xl'>{props.title}</div>
      )}
      <div className='flex justify-between items-start gap-4'>
        <div>
          {props.children}

          <div className='mt-2 italic font-bold text-sm drop-shadow-lg text-indigo-500'>
            {props.flavor}
          </div>
        </div>

        <div className='font-bold text-lg text-white bg-emerald-500 rounded-full px-2.5 py-0.5'>
          {props.grasp}
        </div>
      </div>
    </div>
  );
};
