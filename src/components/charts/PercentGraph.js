import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line, curveCardinal } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import { format as d3Format } from 'd3-format';

import PROPORTIONS from '../../proportions';
import {
  COLUMBIA_NAME,
  END_YEAR,
  START_YEAR,
  years,
  primaryColor,
} from '../../constants';
import { writeTitleFromFields } from '../../utils';
import { FadeWrapper, Line } from '../svg';

const styles = {
  graphTitle: {
    fontFamily: 'Roboto',
    fontSize: '1.3rem',
    fontWeight: 400,
    fill: '#111',
    textAnchor: 'start',
  },
  bold: {
    fontWeight: 700,
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
  equalityLine: {
    fill: 'none',
    strokeDasharray: '5 4',
    stroke: '#555',
    strokeWidth: 1.8,
  },
  equalityLabel: {
    fontFamily: 'Roboto',
    fontSize: '.78rem',
    textAnchor: 'middle',
  },
  '@media (max-width: 767px)': {
    graphTitle: {
      fontSize: '1.2rem',
    },
  },
};

const TICK_PADDING = 9;
const margin = { top: 70, right: 20, bottom: 50, left: 70 };

// Arbitrarily labelling different years for different fields
const labels = {
  Statistics: [2003, 2016],
  Physics: [1994, 2007, 2016],
};

class PercentGraph extends Component {
  constructor(props) {
    super(props);
    this.state = this.calculateSize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => this.setState(this.calculateSize());

  calculateSize = () => {
    const fullWidth = window.innerWidth;
    let height = window.innerHeight * 0.85;
    let width = fullWidth * 0.7;
    let numTicks = years.length / 2;
    if (fullWidth < 768) {
      width = fullWidth * 0.95;
      numTicks = years.length / 4;
    } else if (fullWidth < 992) {
      width = fullWidth * 0.9;
    } else if (fullWidth < 1200) {
      width = fullWidth * 0.85;
    }

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
      .tickFormat(x => x) // remove thousands commas
      .ticks(numTicks);
    const yAxis = axisLeft(yScale)
      .tickSize(-gWidth)
      .tickPadding(TICK_PADDING)
      .tickFormat(d3Format('.0%'));

    return {
      width,
      height,
      gWidth,
      gHeight,

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

      xScale,
      yScale,
      xAxis,
      yAxis,
    } = this.state;
    const { classes, fields, forceTitle } = this.props;

    const lineGenerator = d3Line()
      .x((_, i) => xScale(START_YEAR + i))
      .y(yScale)
      .curve(curveCardinal.tension(0.5))
      .defined(d => d);

    const yearLineGenerator = d3Line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* Graph title */}
          <FadeWrapper isVisible={fields.length > 0 || forceTitle}>
            <text className={classes.graphTitle} x={0} y={-20}>
              {window.innerWidth > 760 && 'Female representation in '}
              <tspan className={classes.bold}>
                {writeTitleFromFields(fields)}
              </tspan>
            </text>
          </FadeWrapper>

          {/* X- and y- axes and y-axis label */}
          <g
            ref={node => d3Select(node).call(xAxis)}
            className={classes.xAxis}
            transform={`translate(0, ${gHeight})`}
          />
          <g
            ref={node => d3Select(node).call(yAxis)}
            className={classes.yAxis}
          />
          <text
            className={classes.axisLabel}
            transform={`translate(${-50}, ${gHeight / 2}) rotate(-90)`}
          >
            Percent female
          </text>

          {/* Equality line */}
          <path
            className={classes.equalityLine}
            d={yearLineGenerator([[START_YEAR, 0.5], [END_YEAR, 0.5]])}
          />
          <text
            className={classes.equalityLabel}
            x={xScale((START_YEAR + END_YEAR) / 2)}
            y={yScale(0.5) - 7}
          >
            EQUAL NUMBER OF MEN AND WOMEN
          </text>

          {/* Columbia field lines */}
          {['TOTALS', 'Mathematics and statistics', 'Physics'].map(field => {
            let data = PROPORTIONS[field];

            if (field !== 'TOTALS') {
              data = data[COLUMBIA_NAME];
            }
            return (
              <Line
                key={field}
                d={lineGenerator(data)}
                isVisible={fields.includes(field)}
                name={field}
                color={primaryColor(field)}
                strokeWidth={3}
                showEndpoint
                labels={(labels[field]
                  ? labels[field]
                  : [END_YEAR]).map(year => ({
                  x: xScale(year),
                  y: yScale(data[year - START_YEAR]),
                  label: Math.round(data[year - START_YEAR] * 100) + '%',
                }))}
              />
            );
          })}
        </g>
      </svg>
    );
  }
}

export default injectSheet(styles)(PercentGraph);
