import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import { START_YEAR, END_YEAR } from './constants';
import { maxCoord } from './utils';
import DATA from './data';

const styles = {
  line: {
    fill: 'none',
    stroke: '#333',
  },
  axis: {
    '& path.domain': { display: 'none' },
    '& g:nth-child(2) > text': {
      // first tick
      display: 'none',
    },
    '& text': {
      fontFamily: 'Roboto',
      fontSize: '0.9rem',
      color: '#999',
    },
    '& > g.tick line': {
      stroke: '#ddd',
    },
  },
};

const NUM_TICKS = 5;
const margin = { top: 60, right: 60, bottom: 60, left: 60 };

class ScatterPlot extends Component {
  constructor(props) {
    super(props);
    const { dataName } = props;
    this.data = DATA[dataName];

    const height = window.innerHeight;
    const gHeight = height - margin.top - margin.bottom;
    const width = height;
    const gWidth = width - margin.left - margin.right;

    const upperLimit = maxCoord(this.data);
    const xScale = scaleLinear()
      .domain([0, upperLimit])
      .range([0, gWidth]);
    const yScale = scaleLinear()
      .domain([0, upperLimit])
      .range([gHeight, 0]);

    const xAxis = axisBottom(xScale)
      .tickSize(-gHeight)
      .ticks(NUM_TICKS);
    const yAxis = axisLeft(yScale)
      .tickSize(-gWidth)
      .ticks(NUM_TICKS);

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
    const { width, height, gHeight, xScale, yScale, xAxis, yAxis } = this.state;
    const { classes, steps } = this.props;

    const lineGenerator = d3Line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));

    return (
      <svg width={width} height={height}>
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

          <path d={lineGenerator(this.data)} className={classes.line} />
        </g>
      </svg>
    );
  }
}

export default injectSheet(styles)(ScatterPlot);
