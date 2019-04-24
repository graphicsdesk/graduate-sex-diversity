import React from 'react';
import { FULL_ARROW_ID } from '../../constants';

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

export default FullArrowHead;
