import React from 'react';
import injectSheet from 'react-jss';
import fadeExistence from './fadeExistence';

const styles = {
  Point: {
    fill: 'green',
  },
};

const Point = ({ classes, x, y }) => {
  return <circle className={classes.Point} cx={x} cy={y} r={5} />;
};

export default fadeExistence(injectSheet(styles)(Point));
