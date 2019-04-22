import React from 'react';
import injectSheet from 'react-jss';
import { ARROW_ID } from '../../constants';

export { default as Line } from './Line';

const ARROW_SIZE = 28;

const lineStyles = {
  stroke: '#111',
  fill: 'none',
  strokeWidth: 1.8,
};

export const ArrowHead = () => (
  <marker
    id={ARROW_ID}
    markerWidth={ARROW_SIZE + 5}
    markerHeight={ARROW_SIZE + 5}
    refX={ARROW_SIZE / 2}
    refY={ARROW_SIZE / 2}
    orient="auto"
    markerUnits="userSpaceOnUse"
  >
    <path
      d={`M1 1 L${ARROW_SIZE / 2} ${ARROW_SIZE / 2} L1 ${ARROW_SIZE - 1}`}
      {...lineStyles}
    />
  </marker>
);

const styles = {
  label: {
    fontFamily: 'Roboto',
    fontSize: '.97rem',
    fontWeight: 700,
    textAnchor: 'middle',
  },
};

const UnstyledArrowLine = ({ classes, x, y, gHeight, orient, label }) => {
  const arrowLength = Math.min(32, gHeight / 10);
  let labelPadding = 7;
  if (orient < 0) labelPadding += 8;

  const x1 = x + orient * gHeight / 8;
  const y1 = y + orient * gHeight / 8;
  const lineCoords = {
    x1,
    y1,
    x2: x1 + orient * arrowLength,
    y2: y1 + orient * arrowLength,
  };

  return (
    <g>
      <line {...lineCoords} {...lineStyles} markerEnd={`url(#${ARROW_ID})`} />
      <text
        className={classes.label}
        transform={`translate(${x1 - orient * labelPadding}, ${y1 -
          orient * labelPadding}) rotate(-45)`}
      >
        {label}
      </text>
    </g>
  );
};
export const ArrowLine = injectSheet(styles)(UnstyledArrowLine);
