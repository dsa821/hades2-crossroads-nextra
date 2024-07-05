type Props = {
  scaleValues: number[];
  prefix?: string;
  suffix?: string;
  negative?: boolean;
};

export const ScaleValue: React.FC<Props> = ({
  scaleValues,
  prefix,
  suffix,
  negative = false,
}) => {
  const scaleColor = negative && "text-red-600";
  return (
    <span className="text-lg font-bold">
      <span className={scaleColor}>{prefix}</span>

      {scaleValues.map((x, i) => (
        <>
          {i !== 0 && <>{" / "}</>}
          <span className={scaleColor}>{x}</span>
        </>
      ))}

      <span className={scaleColor}>{suffix}</span>
    </span>
  );
};
