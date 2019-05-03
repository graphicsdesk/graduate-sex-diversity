import React, { Fragment } from 'react';
import injectSheet from 'react-jss';
import fade from './fade';

const styles = {
  visibleLabel: {
    opacity: 1,
    transitionDuration: '.3s',
  },
  hiddenLabel: {
    opacity: 0,
    transitionDuration: '.3s',
  },
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
    pointerEvents: 'none',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '#111',
    textAnchor: 'middle',
    alignmentBaseline: 'middle',
    pointerEvents: 'none',
  },
  pulsingCircle: {
    animation: 'infinite 1s pulse',
    '&:hover + text': {
      opacity: 1,
    },
    '&:hover': {
      stroke: '#333',
    },
  },
  circle: {
    '&:hover + text': {
      opacity: 1,
    },
    '&:hover': {
      stroke: '#333',
    },
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

  if (label === 1994) labelY += VERT_SPACING;
  else if (label === 2016) labelX += HORI_SPACING;
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
    <Fragment>
      <circle
        className={isPulsing ? classes.pulsingCircle : classes.circle}
        cx={x}
        cy={y}
        r={window.innerWidth < 600 ? 6 : 7}
        fill={fill}
        stroke={isPulsing ? fill : '#fff'}
        strokeWidth={1.5}
      />
      <text
        className={isLabelVisible ? classes.visibleLabel : classes.hiddenLabel}
      >
        <tspan x={labelX} y={labelY} className={classes.backgroundText}>
          {label}
        </tspan>
        <tspan x={labelX} y={labelY} className={classes.text}>
          {label}
        </tspan>
      </text>
    </Fragment>
  );
};

export default fade(injectSheet(styles)(Point));
