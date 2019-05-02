import React from 'react';
import injectSheet from 'react-jss';
import fade from './fade';

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
    fontSize: props => (props.small ? '.75rem' : '.85rem'),
  },
};

// proportion = proportion female
const Guide = ({ classes, line, upperLimit, proportion, id, small }) => {
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
      <text
        className={classes.label}
        transform={small ? 'translate(-150, -150)' : 'translate(14, 14)'}
        fill="#111"
      >
        <textPath href={`#${id}`} startOffset="60%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </g>
  );
};

export default fade(injectSheet(styles)(Guide));
