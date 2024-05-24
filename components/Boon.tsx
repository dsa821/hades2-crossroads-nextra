import { FC } from "react";
import { BoonElement, Rarity } from "models/types";
import { TextHighlight } from "./TextHighlight";
import { IconBase } from "./icons/IconBase";
import { IconBoonBase } from "./icons/IconBoonBase";

type BoonProps = {
  title: string;
  type: Rarity;
  iconKey: string;
  flavor: string;
  element: BoonElement;
};

export const Boon: FC<BoonProps> = (props) => {
  return (
    <div className={`card-bg ${props.className}`}>
      <div className="flex">
        <div className="flex-1">
          {props.title != null && (
            <div className="flex items-center gap-4">
              {props.iconKey != null && (
                <IconBoonBase
                  iconKey={props.iconKey}
                  alt={props.title}
                  type={props.type}
                />
              )}

              <div className="font-bold text-3xl small-caps tracking-wide flex-1">
                <TextHighlight type={props.type}>{props.title}</TextHighlight>
              </div>

              {props.element != null && (
                <div>
                  <IconBase iconKey={props.element} size={28} />
                </div>
              )}
            </div>
          )}
          {props.children}

          {props.flavor && (
            <div className="mt-2 italic font-bold text-sm drop-shadow-lg text-indigo-500">
              {props.flavor}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
