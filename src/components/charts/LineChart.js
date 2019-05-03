import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';

import COUNTS from '../../counts';
import { maxCoord, colorScale } from '../../utils';
import {
  COLUMBIA_NAME,
  END_YEAR,
  POSSIBLE_GUIDES,
  START_YEAR,
} from '../../constants';
import {
  Point,
  Line,
  Guide,
  FadeWrapper,
  FullArrowHead,
  SkinnyArrowHead,
  FullArrow,
  SkinnyArrow,
} from '../svg';

const styles = {
  graphTitle: {
    fontFamily: 'Roboto',
    fontSize: '1.1rem',
    fill: '#111',
    textAnchor: 'start',
    fontWeight: 600,
  },
  line: {
    fill: 'none',
    stroke: '#333',
    strokeWidth: 1.5,
  },
  axis: {
    '& path.domain': { display: 'none' },
    '& g:nth-child(2) > text': {
      // first tick
      display: 'none',
    },
    '& text': {
      fontFamily: 'Roboto',
      fontSize: '0.93rem',
      color: '#999',
    },
    '& > g.tick line': {
      stroke: '#ccc',
      strokeWidth: 0.6,
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
const margin = { top: 40, right: 20, bottom: 50, left: 70 };

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
    if (dataName === 'TOTALS' || dataName === 'Engineering') {
      this.data = COUNTS[dataName];
    } else {
      this.data = COUNTS[dataName][COLUMBIA_NAME];
    }
    return this.calculateSize();
  };

  calculateSize = () => {
    const { dataName } = this.props;

    let NUM_TICKS = 8;

    let width = window.innerWidth * 0.5;
    if (width < 576) {
      NUM_TICKS = 5;
    }

    // Calculate svg and root group's dimensions

    const height = width;
    const gWidth = width - margin.left - margin.right;
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
      .tickSize(-gHeight)
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
      gWidth,
      gHeight,

      upperLimit,
      xScale,
      yScale,
      xAxis,
      yAxis,

      maxYear,
      previousMaxYear,
      markedYears,
    } = this.state;
    const {
      classes,
      dataName,
    } = this.props;
    let AX_LABEL_SPACING = 35;
    if (upperLimit >= 100) {
      AX_LABEL_SPACING += 10;
    }

    const lineGenerator = d3Line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));

    const females = this.data.map(d => d[0]);
    const males = this.data.map(d => d[1]);

    return (
      <svg width={width} height={height}>
        <defs>
          <FullArrowHead dataName={dataName} />
          <SkinnyArrowHead dataName={dataName} />
        </defs>

        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <text className={classes.graphTitle} x={xScale(0)} y={-20}>
            Graduate students in{' '}
            {dataName === 'TOTALS' ? (
              'science and engineering'
            ) : (
              dataName.toLowerCase()
            )}
          </text>

          {/* X-axis and axis label */}
          <g
            ref={node => d3Select(node).call(xAxis)}
            className={classes.axis}
            transform={`translate(0, ${gHeight})`}
          />
          <text
            className={classes.axisLabel}
            transform={`translate(${gWidth / 2}, ${gHeight +
            AX_LABEL_SPACING})`}
          >
            Year
          </text>

          {/* Y-axis and axis label */}
          <g
            ref={node => d3Select(node).call(yAxis)}
            className={classes.axis}
          />
          <text
            className={classes.axisLabel}
            transform={`translate(${-AX_LABEL_SPACING - 13}, ${gHeight /
            2}) rotate(-90)`}
          >
            Number of people
          </text>

          {/* Female data line */}
          <Line
            d={lineGenerator(females)}
            className={classes.line}
            isVisible
            queuePosition={
              maxYear -
              (previousMaxYear < START_YEAR ? START_YEAR : previousMaxYear)
            }
            color={'blue'}
            strokeWidth={1.2}
          />

          {/* Male data line */}
          <Line
            d={lineGenerator(males)}
            className={classes.line}
            isVisible
            queuePosition={
              maxYear -
              (previousMaxYear < START_YEAR ? START_YEAR : previousMaxYear)
            }
            color={'orange'}
            strokeWidth={1.2}
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
