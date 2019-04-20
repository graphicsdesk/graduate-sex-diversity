import React from 'react';
import fadeExistence from './fadeExistence';

const Point = ({ x, y, fill }) => (
  <circle cx={x} cy={y} r={7} fill={fill} stroke="#fff" strokeWidth={1} />
);

export default fadeExistence(Point);
