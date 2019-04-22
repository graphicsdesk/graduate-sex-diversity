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
  pulsingCircle: {
    animation: 'infinite 1s pulse',
  },
  '@keyframes pulse': {
    from: {
      strokeWidth: 0,
      strokeOpacity: 1,
    },
    to: {
      strokeWidth: 19,
      strokeOpacity: 0,
    },
  },
};

const Point = ({
  classes,
  x,
  y,
  fill,
  isPulsing,
  label,
  isLabelVisible,
  avoidX,
  avoidY,
}) => {
  let labelX = x;
  let labelY = y;

  const VERT_SPACING = 24;
  const HORI_SPACING = 36;

  const quartPi = Math.PI / 4;
  let direction = Math.PI - Math.atan((avoidY - labelY) / (avoidX - labelX));
  if (direction < -quartPi) direction += 2 * Math.PI;

  if (label === 2000) labelX -= HORI_SPACING;
  else if (
    -quartPi <= direction &&
    direction < quartPi // place left
  )
    labelX -= HORI_SPACING;
  else if (
    quartPi <= direction &&
    direction < 3 * quartPi // place bottom
  )
    labelY += VERT_SPACING;
  else if (
    3 * quartPi <= direction &&
    direction < 5 * quartPi // place right
  )
    labelX += HORI_SPACING;
  else if (
    5 * quartPi <= direction &&
    direction < 7 * quartPi // place top
  )
    labelY -= VERT_SPACING;

  return (
    <g>
      <circle
        className={isPulsing ? classes.pulsingCircle : undefined}
        cx={x}
        cy={y}
        r={7}
        fill={fill}
        stroke={isPulsing ? fill : '#fff'}
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
