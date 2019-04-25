import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line, curveCardinal } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import { format as d3Format } from 'd3-format';

import DATA from '../../data';
import {
  COLUMBIA_NAME,
  END_YEAR,
  START_YEAR,
  years,
  primaryColor,
  secondaryColor,
} from '../../constants';
import { Line } from '../svg';
import { flattenFields } from '../../utils';

const { DISCIPLINE_PROPORTIONS, FIELD_PROPORTIONS } = DATA;
const styles = {
  graphTitle: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    fontWeight: 400,
    fill: '#111',
    textAnchor: 'start',
  },
  bold: {
    fontWeight: 500,
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
};

const TICK_PADDING = 9;
const margin = { top: 40, right: 20, bottom: 50, left: 80 };

class PercentGraph extends Component {
  constructor(props) {
    super(props);

    const { isSquare } = props;

    let height = window.innerHeight * 0.85;
    let width = window.innerWidth * 0.7;

    if (isSquare) {
      height = width = window.innerWidth * 0.5;
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
    const { classes, disciplines = [], fields = [] } = this.props;
    const {
      names: discNames,
      peerVisibility: discPeerVisibility,
    } = flattenFields(disciplines);
    const {
      names: fieldNames,
      peerVisibility: fieldPeerVisibility,
    } = flattenFields(fields);

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
          <text className={classes.graphTitle} x={0} y={-20}>
            <tspan className={classes.bold}>
              Female representation in {this.props.dataName}
            </tspan>
          </text>

          {/* X- and y- axes */}
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

          {/* Render peer discipline lines */}
          {Object.keys(DISCIPLINE_PROPORTIONS).reduce((acc, disc) => {
            const institutions = DISCIPLINE_PROPORTIONS[disc];
            Object.keys(institutions).forEach((inst, i) => {
              if (inst === COLUMBIA_NAME) return null;
              acc.push(
                <Line
                  key={disc + inst}
                  name={inst}
                  d={lineGenerator(institutions[inst])}
                  isVisible={discPeerVisibility[disc]}
                  color={secondaryColor(disc)}
                  strokeWidth={1.2}
                  queuePosition={i}
                />,
              );
            });
            return acc;
          }, [])}

          {/* Render peer field lines */}
          {Object.keys(FIELD_PROPORTIONS).reduce((acc, instName) => {
            if (instName === COLUMBIA_NAME) return acc;
            const institutions = FIELD_PROPORTIONS[instName];
            Object.keys(institutions).forEach((field, i) => {
              acc.push(
                <Line
                  key={field + instName}
                  name={instName}
                  d={lineGenerator(institutions[field])}
                  isVisible={fieldPeerVisibility[field]}
                  color={secondaryColor(field)}
                  strokeWidth={1.2}
                  queuePosition={i}
                />,
              );
            });
            return acc;
          }, [])}

          {/* Equality guide line */}
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

          {/* Render Columbia discipline lines */}
          {Object.keys(DISCIPLINE_PROPORTIONS).map(disc => {
            const data = DISCIPLINE_PROPORTIONS[disc][COLUMBIA_NAME];
            return (
              <Line
                key={disc}
                d={lineGenerator(data)}
                isVisible={discNames.includes(disc)}
                color={primaryColor(disc)}
                strokeWidth={3}
                showEndpoint
                endpoint={[xScale(END_YEAR), yScale(data[data.length - 1])]}
                endpointLabel={
                  disc // Math.round(data[data.length - 1] * 100) + '%'
                }
              />
            );
          })}

          {/* Render field lines */}
          {Object.keys(FIELD_PROPORTIONS[COLUMBIA_NAME]).map(field => {
            const data = FIELD_PROPORTIONS[COLUMBIA_NAME][field];
            return (
              <Line
                key={field}
                d={lineGenerator(data)}
                isVisible={fieldNames.includes(field)}
                color={primaryColor(field)}
                strokeWidth={3}
                showEndpoint
                endpoint={[xScale(END_YEAR), yScale(data[data.length - 1])]}
                endpointLabel={
                  field /*Math.round(data[data.length - 1] * 100) + '%'*/
                }
              />
            );
          })}
        </g>
      </svg>
    );
  }
}

PercentGraph.defaultProps = {
  maxYear: END_YEAR,
  partitions: [END_YEAR],
};

export default injectSheet(styles)(PercentGraph);
