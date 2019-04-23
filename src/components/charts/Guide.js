import React from 'react';
import injectSheet from 'react-jss';
import fadeExistence from './fadeExistence';

const styles = {
  strongLine: {
    stroke: '#555',
    strokeWidth: 1.8,
  },
  line: {
    stroke: '#888',
    strokeWidth: 1,
  },
  label: {
    fontFamily: 'Roboto',
    fontSize: '.85rem',
  },
};

// proportion = proportion female
const Guide = ({ classes, line, upperLimit, proportion, id }) => {
  if (proportion < 0 || proportion > 1) {
    console.error('Proportion in guide must be between 0 and 1.');
    return null;
  }

  const slope = (1 - proportion) / proportion;
  let text = `${(proportion * 100).toFixed(proportion < 0.1 ? 1 : 0)}% FEMALE`;
  let x2 = upperLimit;
  let y2 = upperLimit;

  if (proportion < 0.5) {
    x2 = y2 / slope;
  } else if (proportion > 0.5) {
    y2 = x2 * slope;
  } else text = 'EQUAL NUMBER OF MEN AND WOMEN';

  return (
    <g>
      <path
        d={line([[0, 0], [x2, y2]])}
        className={proportion === 0.5 ? classes.strongLine : classes.line}
        id={id}
        fill="none"
        strokeDasharray={proportion === 0.5 ? '5 4' : '4 4'}
      />
      <text className={classes.label} transform="translate(14, 14)" fill="#111">
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </g>
  );
};

export default fadeExistence(injectSheet(styles)(Guide));
