import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';

import DATA from '../../data';
import { maxCoord, colorScale } from '../../utils';
import { START_YEAR, EQUALITY_LINE_ID, ARROW_ID } from '../../constants';
import Point from './Point';

const styles = {
  line: {
    fill: 'none',
    stroke: '#333',
  },
  parityLine: {
    strokeWidth: 1.8,
    stroke: '#555',
    strokeDasharray: '5',
  },
  parityLineLabel: {
    fontFamily: 'Roboto',
    fontSize: '.85rem',
    color: '#111',
  },
  arrowLine: {
    strokeWidth: 1.8,
    stroke: '#111',
    fill: 'none',
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
      color: '#888',
    },
    '& > g.tick line': {
      stroke: '#ccc',
      strokeWidth: 0.6,
    },
  },
};

const NUM_TICKS = 6;
const TICK_PADDING = 9;
const ARROW_SIZE = 28;
const margin = { top: 60, right: 100, bottom: 100, left: 60 };

class ScatterPlot extends Component {
  constructor(props) {
    super(props);

    const { dataName } = props;
    this.data = DATA[dataName];

    const width = window.innerWidth * 0.54;
    const height = width;
    const gWidth = width - margin.left - margin.right;
    const gHeight = height - margin.top - margin.bottom;

    const upperLimit = maxCoord(this.data) * 1.02;
    const xScale = scaleLinear()
      .domain([0, upperLimit])
      .range([0, gWidth]);
    const yScale = scaleLinear()
      .domain([0, upperLimit])
      .range([gHeight, 0]);

    const xAxis = axisBottom(xScale)
      .tickSize(-gHeight)
      .tickPadding(TICK_PADDING)
      .ticks(NUM_TICKS);
    const yAxis = axisLeft(yScale)
      .tickSize(-gWidth)
      .tickPadding(TICK_PADDING)
      .ticks(NUM_TICKS);

    this.state = {
      width,
      height,
      gWidth,
      gHeight,

      upperLimit,
      xScale,
      yScale,
      xAxis,
      yAxis,

      maxYear: this.props.maxYear,
      previousMaxYear: START_YEAR,
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.maxYear !== prevState.maxYear) {
      return {
        maxYear: nextProps.maxYear,
        previousMaxYear: prevState.maxYear,
      };
    }

    return null;
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
      maxYear,
      previousMaxYear,
    } = this.state;
    const { classes } = this.props;

    const lineGenerator = d3Line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));

    return (
      <svg width={width} height={height}>
        <defs>
          <marker
            id={ARROW_ID}
            markerWidth={ARROW_SIZE + 5}
            markerHeight={ARROW_SIZE + 5}
            refX={ARROW_SIZE / 2}
            refY={ARROW_SIZE / 2}
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path
              d={`M1 1 L${ARROW_SIZE / 2} ${ARROW_SIZE / 2} L1 ${ARROW_SIZE -
                1}`}
              className={classes.arrowLine}
            />
          </marker>
        </defs>

        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g
            ref={node => d3Select(node).call(xAxis)}
            className={classes.axis}
            transform={`translate(0, ${gHeight})`}
          />
          <g
            ref={node => d3Select(node).call(yAxis)}
            className={classes.axis}
          />

          <path
            d={lineGenerator([[0, 0], [upperLimit, upperLimit]])}
            className={classes.parityLine}
            id={EQUALITY_LINE_ID}
          />
          <text
            className={classes.parityLineLabel}
            transform="translate(14, 14)"
          >
            <textPath
              href={`#${EQUALITY_LINE_ID}`}
              startOffset="50%"
              textAnchor="middle"
            >
              EQUAL NUMBER OF MEN AND WOMEN
            </textPath>
          </text>

          <line
            x1={200}
            y1={200}
            x2={150}
            y2={150}
            markerEnd={`url(#${ARROW_ID})`}
            className={classes.arrowLine}
          />

          <path d={lineGenerator(this.data)} className={classes.line} />

          {this.data.map(([x, y], i) => (
            <Point
              key={x + '-' + y}
              x={xScale(x)}
              y={yScale(y)}
              isVisible={START_YEAR + i <= maxYear}
              fill={colorScale[i]}
              queuePosition={
                START_YEAR +
                i -
                (previousMaxYear < START_YEAR ? START_YEAR : previousMaxYear)
              }
            />
          ))}
        </g>
      </svg>
    );
  }
}

export default injectSheet(styles)(ScatterPlot);
