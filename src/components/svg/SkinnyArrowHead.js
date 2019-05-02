import React from 'react';
import { skinnyArrowId } from '../../constants';

const SKINNY_ARROW_SIZE = 28;

const SkinnyArrowHead = ({ dataName }) => (
  <marker
    id={skinnyArrowId(dataName)}
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
      stroke="#111"
      fill="none"
      strokeWidth={1.8}
    />
  </marker>
);

export default SkinnyArrowHead;
