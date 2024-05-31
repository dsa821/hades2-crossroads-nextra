import {cloneElement } from 'react';

type GreekTitleProps = {
  name: string;
  icon?: React.ReactNode;
};
export const GreekTitle: React.FC<GreekTitleProps> = ({ name, icon }) => {
  const clonedIcon = cloneElement(icon, { size: 48 });
  return (
    <span className="flex items-center gap-2">
      {clonedIcon}
      <span className="font-greek text-5xl">{name}</span>
    </span>
  );
};
