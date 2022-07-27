import React from 'react';

interface ISVG {
  //ex:svg/common/arrow.svg => name = common/arrow
  name: string;
  className?: string;
  width?: number;
  height?: number;
}
const SVG = (props: ISVG) => {
  const { className, name, width = 24, height = 24 } = props;
  return (
    <div className={className}>
      <img
        src={require(`assets/svg/${name}.svg`)}
        alt="svg"
        width={width}
        height={height}
      />
    </div>
  );
};
export default SVG;
