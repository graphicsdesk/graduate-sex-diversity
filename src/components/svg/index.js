import React from 'react';
import injectSheet from 'react-jss';
import { SKINNY_ARROW_ID, FULL_ARROW_ID } from '../../constants';

export { default as FadeWrapper } from './FadeWrapper';

const lineStyles = {
  stroke: '#111',
  fill: 'none',
  strokeWidth: 1.8,
};

const FULL_ARROW_SIZE = 18;

export const FullArrowHead = () => (
  <marker
    id={FULL_ARROW_ID}
    markerWidth={FULL_ARROW_SIZE}
    markerHeight={FULL_ARROW_SIZE}
    refX={FULL_ARROW_SIZE / 2}
    refY={FULL_ARROW_SIZE / 2}
    orient="auto"
    markerUnits="userSpaceOnUse"
  >
    <path
      d={`M0 0 L${FULL_ARROW_SIZE} ${FULL_ARROW_SIZE /
        2} L0 ${FULL_ARROW_SIZE} z`}
      fill="#111"
    />
  </marker>
);

const fullStyles = {
  label: {
    fontFamily: 'Roboto',
    fontSize: '.97rem',
    fontWeight: 700,
    textAnchor: 'middle',
  },
};

const UnstyledFullArrow = ({
  classes,
  x,
  y,
  gHeight,
  orient,
  line1,
  line2,
}) => {
  const arrowLength = 55;

  let labelPadding = 7;
  let dx = 0;
  let dy = 0;
  if (orient === 'right') {
    dx = arrowLength;
    labelPadding = 45;
  } else if (orient === 'up') {
    dy = -arrowLength;
  }

  const x1 = x;
  const y1 = y;
  const lineCoords = {
    x1,
    y1,
    x2: x1 + dx,
    y2: y1 + dy,
  };

  return (
    <g>
      <line
        {...lineCoords}
        {...lineStyles}
        markerEnd={`url(#${FULL_ARROW_ID})`}
      />
      <text
        className={classes.label}
        x={0}
        y={0}
        transform={`translate(${x1 + (dx ? -labelPadding : 0)}, ${y1 +
          (dy ? labelPadding : 0)})`}
      >
        <tspan x={0} dy={dy ? '1.3rem' : 0}>
          {line1}
        </tspan>
        <tspan x={0} dy="1.3rem">
          {line2}
        </tspan>
      </text>
    </g>
  );
};
export const FullArrow = injectSheet(fullStyles)(UnstyledFullArrow);

const SKINNY_ARROW_SIZE = 28;

export const SkinnyArrowHead = () => (
  <marker
    id={SKINNY_ARROW_ID}
    markerWidth={SKINNY_ARROW_SIZE}
    markerHeight={SKINNY_ARROW_SIZE}
    refX={SKINNY_ARROW_SIZE / 2}
    refY={SKINNY_ARROW_SIZE / 2}
    orient="auto"
    markerUnits="userSpaceOnUse"
  >
    <path
      d={`M1 1 L${SKINNY_ARROW_SIZE / 2} ${SKINNY_ARROW_SIZE /
        2} L1 ${SKINNY_ARROW_SIZE - 1}`}
      {...lineStyles}
    />
  </marker>
);

const skinnyStyles = {
  label: {
    fontFamily: 'Roboto',
    fontSize: '.97rem',
    fontWeight: 700,
    textAnchor: 'middle',
  },
};

const UnstyledSkinnyArrow = ({ classes, x, y, gHeight, orient, label }) => {
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
      <line
        {...lineCoords}
        {...lineStyles}
        markerEnd={`url(#${SKINNY_ARROW_ID})`}
      />
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
export const SkinnyArrow = injectSheet(skinnyStyles)(UnstyledSkinnyArrow);
