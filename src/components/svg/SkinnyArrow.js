import React from 'react';
import injectSheet from 'react-jss';
import { SCATTER_BREAK, skinnyArrowId } from '../../constants';

const styles = {
  label: {
    fontFamily: 'Roboto',
    fontSize: '.97rem',
    fontWeight: 700,
    textAnchor: 'middle',
  },
  [`@media (max-width: ${SCATTER_BREAK}px)`]: {
    label: {
      fontSize: '.85rem',
    },
  },
};

const SkinnyArrow = ({ classes, x, y, gHeight, orient, label, dataName }) => {
  const arrowLength = Math.min(32, gHeight / 10);
  let labelPadding = 7;
  if (orient < 0) labelPadding += 8;

  const x1 = x + orient * gHeight / 7;
  const y1 = y + orient * gHeight / 7;
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
        stroke="#111"
        fill="none"
        strokeWidth={1.8}
        markerEnd={`url(#${skinnyArrowId(dataName)})`}
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

export default injectSheet(styles)(SkinnyArrow);
