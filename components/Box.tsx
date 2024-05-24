export const Box = ({ children, className = "" }) => {
  return <div className={`card-bg ${className}`}>{children}</div>;
};
