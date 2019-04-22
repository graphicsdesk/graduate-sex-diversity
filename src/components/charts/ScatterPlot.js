import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';

import DATA from '../../data';
import { maxCoord, colorScale } from '../../utils';
import { START_YEAR, EQUALITY_LINE_ID } from '../../constants';
import { Line, ArrowHead, ArrowLine } from '../svg';
import Point from './Point';

const styles = {
  line: {
    fill: 'none',
    stroke: '#333',
    strokeWidth: 1.3,
  },
  parityLine: {
    strokeWidth: 1.8,
    stroke: '#555',
    strokeDasharray: '5 4',
  },
  parityLineLabel: {
    fontFamily: 'Roboto',
    fontSize: '.85rem',
    color: '#111',
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
    const { maxYear: nextMax } = nextProps;
    const { maxYear: prevMax } = prevState;
    if (nextMax !== prevMax) {
      return {
        maxYear: nextMax,
        previousMaxYear: prevMax,
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
    const { classes, isLineVisible } = this.props;

    const lineGenerator = d3Line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));

    return (
      <svg width={width} height={height}>
        <defs>
          <ArrowHead />
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

          <ArrowLine
            x={xScale(upperLimit * 0.65)}
            y={yScale(upperLimit * 0.65)}
            gHeight={gHeight}
            orient={-1}
            label="MORE MEN"
          />
          <ArrowLine
            x={xScale(upperLimit * 0.65)}
            y={yScale(upperLimit * 0.65)}
            gHeight={gHeight}
            orient={1}
            label="MORE WOMEN"
          />

          <Line
            d={lineGenerator(this.data)}
            className={classes.line}
            isVisible={isLineVisible}
          />

          {this.data.map((point, i) => {
            const [x, y] = point;
            const year = START_YEAR + i;
            const isMarkedYear = previousMaxYear === year || maxYear === year;
            let avoidPoint = this.data[
              i >= this.data.length - 1 ? i - 1 : i + 1
            ];
            if (isMarkedYear && i > 0 && false) avoidPoint = this.data[i - 1];
            return (
              <Point
                key={x + '-' + y}
                x={xScale(x)}
                y={yScale(y)}
                fill={colorScale[i]}
                label={year}
                avoidX={xScale(avoidPoint[0])}
                avoidY={yScale(avoidPoint[1])}
                isLabelVisible={isMarkedYear}
                isVisible={START_YEAR + i <= maxYear}
                queuePosition={
                  START_YEAR +
                  i -
                  (previousMaxYear < START_YEAR ? START_YEAR : previousMaxYear)
                }
              />
            );
          })}
        </g>
      </svg>
    );
  }
}

export default injectSheet(styles)(ScatterPlot);
