import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line } from 'd3-shape';
import { START_YEAR, END_YEAR } from './constants';
import { maxCoord } from './utils';
import DATA from './data';

const styles = {};

const margin = { top: 20, right: 20, bottom: 20, left: 20 };

class ScatterPlot extends Component {
  constructor(props) {
    super(props);
    const { dataName } = props;
    this.data = DATA[dataName];

    const height = window.innerHeight - margin.top - margin.bottom;
    const width = height;

    const upperLimit = maxCoord(this.data);
    const scale = scaleLinear()
          .domain([0, upperLimit]).range([0, width]);

    this.state = {
      width: height,
      height,
      scale,
    };
  }

  render() {
    const { width, height, scale } = this.state;
    const { classes, steps } = this.props;

    const lineGenerator = d3Line().x(d => scale(console.log(d[0]))).y(d => scale(d[1]));
    console.log(lineGenerator(this.data));

    return (
      <svg width={width} height={height}>
        <g transform={`translate(0, ${margin.top})`}>
          <path d={lineGenerator(this.data)} />
        </g>
      </svg>
    );
  }
}

export default injectSheet(styles)(ScatterPlot);
