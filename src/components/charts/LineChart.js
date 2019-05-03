import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line, curveCardinal } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';

import COUNTS from '../../counts';
import { capitalizeWords, maxCoord } from '../../utils';
import { COLUMBIA_NAME, END_YEAR, START_YEAR } from '../../constants';
import { Line } from '../svg';

const axisStyles = {
  '& path.domain': { display: 'none' },
  '& text': {
    fontFamily: 'Roboto',
    fontSize: ({ small }) => (small ? '0.85rem' : '0.93rem'),
    color: '#999',
  },
  '& > g.tick line': {
    stroke: '#ccc',
    strokeWidth: 0.6,
  },
};

const styles = {
  graphTitle: {
    fontFamily: 'Roboto',
    fontSize: ({ small }) => (small ? '0.9rem' : '1.15rem'),
    fill: '#111',
    textAnchor: 'middle',
    fontWeight: 600,
  },
  line: {
    fill: 'none',
    stroke: '#333',
    strokeWidth: 1.5,
  },
  xAxis: axisStyles,
  yAxis: {
    ...axisStyles,
    '& g:nth-child(2) > text': {
      // first tick
      display: 'none',
    },
  },
  axisLabel: {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fill: '#999',
    textAnchor: 'middle',
  },
};

const TICK_PADDING = 9;
const margin = { top: 40, right: 20, bottom: 50, left: 62 };

const SMALL_LEFT = 35;

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = this.resetState();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dataName !== this.props.dataName) {
      this.setState(this.resetState());
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => this.setState(this.calculateSize());

  resetState = () => {
    const { dataName } = this.props;
    if (dataName === 'TOTALS') {
      this.data = COUNTS[dataName];
    } else {
      this.data = COUNTS[dataName][COLUMBIA_NAME];
    }
    return this.calculateSize();
  };

  calculateSize = () => {
    const { small, big, noYlabel } = this.props;

    let NUM_TICKS = 8;

    let width = 400;
    if (small) {
      width = 300;
    } else if (big) {
      width = 500;
    }
    if (width < 576) {
      NUM_TICKS = 5;
    }

    if (width > window.innerWidth) width = window.innerWidth * 0.9;

    // Calculate svg and root group's dimensions

    const height = width;
    let gWidth = width - margin.right;
    if (noYlabel) gWidth -= SMALL_LEFT;
    else gWidth -= margin.left;
    const gHeight = height - margin.top - margin.bottom;

    // Construct scales and axes from data

    let upperLimit = maxCoord(this.data) * 1.1;
    const xScale = scaleLinear()
      .domain([START_YEAR, END_YEAR])
      .range([0, gWidth]);
    const yScale = scaleLinear()
      .domain([0, upperLimit])
      .range([gHeight, 0]);

    const xAxis = axisBottom(xScale)
      .tickPadding(TICK_PADDING)
      .tickFormat(x => x) // remove thousands commas
      .ticks(NUM_TICKS);
    const yAxis = axisLeft(yScale)
      .tickSize(-gWidth)
      .tickPadding(TICK_PADDING)
      .ticks(NUM_TICKS);

    return {
      width,
      height,
      gWidth,
      gHeight,

      upperLimit,
      xScale,
      yScale,
      xAxis,
      yAxis,
    };
  };

  render() {
    const {
      width,
      height,
      gHeight,

      upperLimit,
      xScale,
      yScale,
      xAxis,
      yAxis,
    } = this.state;
    const { classes, dataName, noTitle, noYlabel } = this.props;
    let AX_LABEL_SPACING = 35;
    if (upperLimit >= 100) {
      AX_LABEL_SPACING += 10;
    }

    const lineGenerator = d3Line()
      .x((_, i) => xScale(START_YEAR + i))
      .y(yScale)
      .curve(curveCardinal.tension(0.5))
      .defined(d => d);

    const females = this.data.map(d => d[0]);
    const males = this.data.map(d => d[1]);

    return (
      <svg width={width} height={height}>
        <g
          transform={`translate(${noYlabel
            ? SMALL_LEFT
            : margin.left}, ${margin.top})`}
        >
          {!noTitle && (
            <text
              className={classes.graphTitle}
              x={xScale((START_YEAR + END_YEAR) / 2)}
              y={-10}
            >
              {capitalizeWords(dataName)}
            </text>
          )}

          {/* X-axis */}
          <g
            ref={node => d3Select(node).call(xAxis)}
            className={classes.xAxis}
            transform={`translate(0, ${gHeight})`}
          />

          {/* Y-axis and axis label */}
          <g
            ref={node => d3Select(node).call(yAxis)}
            className={classes.yAxis}
          />
          {!noYlabel && (
            <text
              className={classes.axisLabel}
              transform={`translate(${-AX_LABEL_SPACING - 5}, ${gHeight /
                2}) rotate(-90)`}
            >
              Number of graduate students
            </text>
          )}

          {/* Male data line */}
          <Line
            d={lineGenerator(males)}
            className={classes.line}
            isVisible
            color={'#ff9d13'}
            strokeWidth={2}
            labels={[
              {
                x: xScale(END_YEAR - 1),
                y: yScale(males[END_YEAR - 1 - START_YEAR]),
                r: 0,
                label: 'Male',
              },
              {
                x: xScale(END_YEAR),
                y: yScale(males[END_YEAR - START_YEAR]),
                r: 4,
                isPulsing: false,
                label: '',
              },
            ]}
          />

          {/* Female data line */}
          <Line
            d={lineGenerator(females)}
            className={classes.line}
            isVisible
            color={'#5e98ff'}
            strokeWidth={2}
            labels={[
              {
                x: xScale(END_YEAR - 1),
                y: yScale(females[END_YEAR - 1 - START_YEAR]),
                r: 0,
                label: 'Female',
              },
              {
                x: xScale(END_YEAR),
                y: yScale(females[END_YEAR - START_YEAR]),
                r: 4,
                isPulsing: false,
                label: '',
              },
            ]}
          />
        </g>
      </svg>
    );
  }
}

LineChart.defaultProps = {
  guides: [],
};

export default injectSheet(styles)(LineChart);
