import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line, area as d3Area, curveCardinal } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import { format as d3Format } from 'd3-format';

import DATA from '../../data';
import { COLUMBIA_NAME, END_YEAR, START_YEAR, years } from '../../constants';
import Line from './Line';
import { partitionYears } from '../../utils';

const styles = {
  line: {
    fill: 'none',
    stroke: '#333',
    strokeWidth: 1.5,
  },
  xAxis: {
    '& path.domain': { display: 'none' },
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
  yAxis: {
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
const margin = { top: 10, right: 20, bottom: 30, left: 45 };

class PercentGraph extends Component {
  constructor(props) {
    super(props);

    const { dataName } = props;
    this.data = DATA[dataName];

    const height = window.innerHeight * 0.85;
    const width = window.innerWidth * 0.7;
    const gWidth = width - margin.left - margin.right;
    const gHeight = height - margin.top - margin.bottom;

    const xScale = scaleLinear()
      .domain([START_YEAR, END_YEAR])
      .range([0, gWidth]);
    const yScale = scaleLinear()
      .domain([0, 1])
      .range([gHeight, 0]);

    const xAxis = axisBottom(xScale)
      .tickSize(-gHeight)
      .tickPadding(TICK_PADDING)
      .tickFormat(x => x)
      .ticks(years.length / 2);
    const yAxis = axisLeft(yScale)
      .tickSize(-gWidth)
      .tickPadding(TICK_PADDING)
      .tickFormat(d3Format('.0%'));

    this.state = {
      width,
      height,
      gWidth,
      gHeight,

      xScale,
      yScale,
      xAxis,
      yAxis,
    };
  }

  render() {
    const {
      width,
      height,
      gHeight,

      xScale,
      yScale,
      xAxis,
      yAxis,
    } = this.state;
    const { classes, partitions, maxYear } = this.props;

    const lineGenerator = d3Line()
      .x((_, i) => xScale(START_YEAR + i))
      .y(yScale)
      .curve(curveCardinal.tension(0.5))
      .defined(d => d);

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g
            ref={node => d3Select(node).call(xAxis)}
            className={classes.xAxis}
            transform={`translate(0, ${gHeight})`}
          />

          <g
            ref={node => d3Select(node).call(yAxis)}
            className={classes.yAxis}
          />

          {partitions.map((year, i) => {
            const previousMaxYear = i > 0 ? partitions[i - 1] : START_YEAR;
            return (
              <Line
                key={year}
                d={lineGenerator(
                  partitionYears(
                    this.data[COLUMBIA_NAME],
                    previousMaxYear,
                    year,
                  ),
                )}
                className={classes.line}
                strokeWidth={3}
                isVisible={year <= maxYear}
              />
            );
          })}
        </g>
      </svg>
    );
  }
}

PercentGraph.defaultProps = {
  showGuides: [],
};

export default injectSheet(styles)(PercentGraph);
