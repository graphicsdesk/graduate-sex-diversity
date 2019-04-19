import React from 'react';
import fadeExistence from './fadeExistence';

const Point = ({ x, y }) => {
  return <circle cx={x} cy={y} r={5} fill="green" />;
};

export default fadeExistence(Point);
