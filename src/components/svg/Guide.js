import React from 'react';
import injectSheet from 'react-jss';
import nanoid from 'nanoid';
import fade from './fade';
import { SCATTER_BREAK } from '../../constants';

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
    fontSize: props =>
      window.innerWidth < SCATTER_BREAK
        ? '.72rem'
        : props.small ? '.75rem' : '.85rem',
  },
};

// proportion = proportion female
const Guide = ({ classes, line, upperLimit, proportion }) => {
  const slope = (1 - proportion) / proportion;
  let text = `${(proportion * 100).toFixed(proportion < 0.1 ? 1 : 0)}% FEMALE`;
  let x2 = upperLimit;
  let y2 = upperLimit;

  const isEquality = proportion === 0.5;

  if (proportion < 0.5) {
    x2 = y2 / slope;
  } else if (proportion > 0.5) {
    y2 = x2 * slope;
  } else text = 'EQUAL NUMBER OF MEN AND WOMEN';

  const id = nanoid();

  const SHIFT = window.innerWidth < SCATTER_BREAK ? 12 : 14;

  return (
    <g>
      <path
        d={line([[0, 0], [x2, y2]])}
        className={isEquality ? classes.strongLine : classes.line}
        id={id}
        fill="none"
        strokeDasharray={isEquality ? '5 4' : '4 4'}
      />
      <text
        className={classes.label}
        transform={`translate(${SHIFT}, ${SHIFT})`}
        fill="#111"
      >
        <textPath xlinkHref={`#${id}`} startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </g>
  );
};

export default fade(injectSheet(styles)(Guide));
