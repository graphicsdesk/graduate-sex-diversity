import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line, curveCardinal } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import { format as d3Format } from 'd3-format';

import PROPORTIONS from '../../proportions';
import { capitalizeWords } from '../../utils';
import { COLUMBIA_NAME, END_YEAR, START_YEAR } from '../../constants';
import { Line } from '../svg';

const axisStyles = {
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
};

const styles = {
  graphTitle: {
    fontFamily: 'Roboto',
    fontSize: '1.15rem',
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
  equalityLine: {
    fill: 'none',
    strokeDasharray: '5 4',
    stroke: '#555',
    strokeWidth: 1.8,
  },
  equalityLabel: {
    fontFamily: 'Roboto',
    fontWeight: 30,
    fontSize: '.7rem',
    textAnchor: 'middle',
  },
};

const TICK_PADDING = 9;
const margin = { top: 40, right: 20, bottom: 50, left: 70 };

class PercentChart extends Component {
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
      this.data = PROPORTIONS[dataName];
    } else {
      this.data = PROPORTIONS[dataName][COLUMBIA_NAME];
    }
    return this.calculateSize();
  };

  calculateSize = () => {
    let NUM_TICKS = 8;

    let width = window.innerWidth * 0.5;
    width = 400;
    if (width < 576) {
      NUM_TICKS = 5;
    }

    if (width > window.innerWidth) width = window.innerWidth * 0.9;

    // Calculate svg and root group's dimensions

    const height = width;
    const gWidth = width - margin.left - margin.right;
    const gHeight = height - margin.top - margin.bottom;

    // Construct scales and axes from data

    const xScale = scaleLinear()
      .domain([START_YEAR, END_YEAR])
      .range([0, gWidth]);
    const yScale = scaleLinear()
      .domain([0, 1])
      .range([gHeight, 0]);

    const xAxis = axisBottom(xScale)
      .tickPadding(TICK_PADDING)
      .tickFormat(x => x) // remove thousands commas
      .ticks(NUM_TICKS);
    const yAxis = axisLeft(yScale)
      .tickSize(-gWidth)
      .ticks(NUM_TICKS)
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
    const { classes, dataName, noTitle } = this.props;
    let AX_LABEL_SPACING = 35;

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
          <text
            className={classes.axisLabel}
            transform={`translate(${-AX_LABEL_SPACING - 13}, ${gHeight /
              2}) rotate(-90)`}
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
          <text
            className={classes.equalityLabel}
            x={xScale((START_YEAR + END_YEAR) / 2)}
            y={yScale(0.5) + 16}
          >
            LIGHT LINES = PEER INSTITUTIONS
          </text>

          {/* Peer data lines */}
          {Object.keys(PROPORTIONS[dataName]).map(inst => {
            if (inst === COLUMBIA_NAME) {
              return null;
            }
            return (
              <Line
                d={lineGenerator(PROPORTIONS[dataName][inst])}
                key={dataName + inst}
                className={classes.line}
                isVisible
                color={'#b1d0ff'}
                strokeWidth={0.7}
              />
            );
          })}

          {/* Percentage data line */}
          <Line
            d={lineGenerator(this.data)}
            className={classes.line}
            isVisible
            color={'#5e98ff'}
            strokeWidth={2}
            labels={[
              {
                x: xScale(END_YEAR),
                y: yScale(this.data[END_YEAR - START_YEAR]),
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

PercentChart.defaultProps = {
  guides: [],
};

export default injectSheet(styles)(PercentChart);
