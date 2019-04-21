import React from 'react';
import { ARROW_ID } from '../../constants';

const ARROW_SIZE = 28;

const lineStyles = {
  stroke: '#111',
  fill: 'none',
  strokeWidth: 1.8,
};

export const Arrow = () => (
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

export const ArrowLine = props => (
  <line {...props} {...lineStyles} markerEnd={`url(#${ARROW_ID})`} />
);
