import { IconBase } from "./IconBase";

type Props = {
  value?: string;
};
export const IconMagick: React.FC<Props> = ({ value }) => {
  return (
    <>
      {value && <span className="font-bold text-blue-500">{value}</span>}
      <IconBase iconKey="magick" />
    </>
  );
};
