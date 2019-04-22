import React from 'react';
import injectSheet from 'react-jss';
import fadeExistence from './fadeExistence';

const styles = {
  backgroundText: {
    stroke: '#fff',
    strokeWidth: 2,
    opacity: 0.8,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    textAnchor: 'middle',
    alignmentBaseline: 'middle',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '#111',
    textAnchor: 'middle',
    alignmentBaseline: 'middle',
  },
};

const Point = ({
  classes,
  x,
  y,
  fill,
  avoidX,
  avoidY,
  isLabelVisible,
  label,
}) => {
  let labelX = x;
  let labelY = y;

  const labelSpacing = {
    top: 20,
    right: 30,
    bottom: 20,
    left: 30,
  };

  const quartPi = Math.PI / 4;
  let direction = Math.PI - Math.atan((avoidY - labelY) / (avoidX - labelX));
  if (direction < -quartPi) direction += 2 * Math.PI;

  if (
    -quartPi <= direction &&
    direction < quartPi // place left
  )
    labelX -= labelSpacing.left;
  else if (
    quartPi <= direction &&
    direction < 3 * quartPi // place bottom
  )
    labelY += labelSpacing.bottom;
  else if (
    3 * quartPi <= direction &&
    direction < 5 * quartPi // place right
  )
    labelX += labelSpacing.right;
  else if (
    5 * quartPi <= direction &&
    direction < 7 * quartPi // place top
  )
    labelY -= labelSpacing.top;

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={7.2}
        fill={fill}
        stroke="#fff"
        strokeWidth={1.5}
      />
      {isLabelVisible && (
        <text>
          <tspan x={labelX} y={labelY} className={classes.backgroundText}>
            {label}
          </tspan>
          <tspan x={labelX} y={labelY} className={classes.text}>
            {label}
          </tspan>
        </text>
      )}
    </g>
  );
};

export default fadeExistence(injectSheet(styles)(Point));
