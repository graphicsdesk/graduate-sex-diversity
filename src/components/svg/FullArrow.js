import React from 'react';
import injectSheet from 'react-jss';
import { fullArrowId } from '../../constants';

const styles = {
  label: {
    fontFamily: 'Roboto',
    fontSize: '.97rem',
    fontWeight: 700,
    textAnchor: 'middle',
  },
};

const FullArrow = ({
  classes,
  x,
  y,
  orient,
  line1,
  line2,
  line3,
  dataName,
}) => {
  const arrowLength = 55;

  let labelPadding = null;
  let dx = 0;
  let dy = 0;
  if (orient === 'right') {
    dx = arrowLength;
    labelPadding = 45;
  } else if (orient === 'up') {
    dy = -arrowLength;
    labelPadding = 21;
  }

  const x1 = x;
  const y1 = y;
  const lineCoords = {
    x1,
    y1,
    x2: x1 + dx,
    y2: y1 + dy,
  };

  const lineHeight = 21;
  return (
    <g>
      <line
        {...lineCoords}
        stroke="#111"
        fill="none"
        strokeWidth={1.8}
        transform={dx ? `translate(8, ${lineHeight - 4})` : ''}
        markerEnd={`url(#${fullArrowId(dataName)})`}
      />
      <text
        className={classes.label}
        x={0}
        y={0}
        transform={`translate(${x1 + (dx ? -labelPadding : 0)}, ${y1 +
          (dy ? labelPadding : 0)})`}
      >
        <tspan x={0} y={0}>
          {line1}
        </tspan>
        <tspan x={0} y={lineHeight}>
          {line2}
        </tspan>
        <tspan x={0} y={lineHeight * 2}>
          {line3}
        </tspan>
      </text>
    </g>
  );
};

export default injectSheet(styles)(FullArrow);
