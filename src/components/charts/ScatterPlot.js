import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { scaleLinear } from 'd3-scale';
import { line as d3Line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { select as d3Select } from 'd3-selection';

import DATA from '../../data';
import { maxCoord, colorScale } from '../../utils';
import { END_YEAR, POSSIBLE_GUIDES, START_YEAR } from '../../constants';
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

const { DISCIPLINE_COUNTS, FIELD_COUNTS } = DATA;

const styles = {
  graphTitle: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    fontWeight: 400,
    fill: '#111',
    textAnchor: 'start',
  },
  bold: {
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

const NUM_TICKS = 8;
const TICK_PADDING = 9;
const margin = { top: 40, right: 20, bottom: 50, left: 70 };

class ScatterPlot extends Component {
  constructor(props) {
    super(props);
    const { discipline, field } = this.props;
    if (discipline) this.data = DISCIPLINE_COUNTS[discipline];
    else this.data = FIELD_COUNTS[field];

    const width = window.innerWidth * 0.5;
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
      markedYears: [START_YEAR],
    };
  }

  calculateSVGDimensions = () => {
    const { discipline, field } = this.props;
    if (discipline) this.data = DISCIPLINE_COUNTS[discipline];
    else this.data = FIELD_COUNTS[field];

    const width = window.innerWidth * 0.5;
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

    this.setState({
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
      markedYears: [START_YEAR, END_YEAR],
    });
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.discipline || prevProps.field;
    const name = this.props.discipline || this.props.field;

    if (name !== prevName) {
      this.calculateSVGDimensions();
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const { maxYear: nextMax } = nextProps;
    const { maxYear: prevMax, markedYears } = prevState;
    if (nextMax !== prevMax) {
      if (!markedYears.includes(nextMax)) markedYears.push(nextMax);
      return {
        maxYear: nextMax,
        previousMaxYear: prevMax,
        markedYears,
      };
    }

    return null;
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
    const { classes, showLine, showAxesIndicators, showGuides } = this.props;
    const axisLabelSpacing = 45;

    const lineGenerator = d3Line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));

    return (
      <svg width={width} height={height}>
        <defs>
          <FullArrowHead />
          <SkinnyArrowHead />
        </defs>

        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <text className={classes.graphTitle} x={xScale(0)} y={-20}>
            <tspan className={classes.bold}>{this.props.dataName}</tspan>, male
            vs. female
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
              axisLabelSpacing})`}
          >
            Number of women
          </text>

          {/* Y-axis and axis label */}
          <g
            ref={node => d3Select(node).call(yAxis)}
            className={classes.axis}
          />
          <text
            className={classes.axisLabel}
            transform={`translate(${-axisLabelSpacing - 13}, ${gHeight /
              2}) rotate(-90)`}
          >
            Number of men
          </text>

          {/* Proportion guides */}
          {POSSIBLE_GUIDES.map(proportion => (
            <Guide
              key={proportion}
              line={lineGenerator}
              upperLimit={upperLimit}
              proportion={proportion}
              id={proportion + '-representation-guide'}
              isVisible={showGuides.includes(proportion)}
            />
          ))}

          <FadeWrapper isVisible={showGuides.length > 0}>
            <SkinnyArrow
              x={xScale(upperLimit * 0.65)}
              y={yScale(upperLimit * 0.65)}
              gHeight={gHeight}
              orient={-1}
              label="MORE MEN"
            />
            <SkinnyArrow
              x={xScale(upperLimit * 0.65)}
              y={yScale(upperLimit * 0.65)}
              gHeight={gHeight}
              orient={1}
              label="MORE WOMEN"
            />
          </FadeWrapper>

          <FadeWrapper isVisible={showAxesIndicators}>
            <FullArrow
              x={xScale(upperLimit / 15)}
              y={yScale(this.data[0][1] + upperLimit / 6)}
              gHeight={gHeight}
              orient="up"
              line1="NUMBER"
              line2="OF MEN"
            />
            <FullArrow
              x={xScale(upperLimit * 3 / 10)}
              y={yScale(this.data[0][1])}
              gHeight={gHeight}
              orient="right"
              line1="NUMBER"
              line2="OF WOMEN"
            />
          </FadeWrapper>

          <Line
            d={lineGenerator(this.data)}
            className={classes.line}
            isVisible={showLine}
            color="#333"
            strokeWidth={1.2}
          />

          {this.data.map((point, i) => {
            const [x, y] = point;
            const year = START_YEAR + i;
            let avoidPoint = this.data[
              i >= this.data.length - 1 ? i - 1 : i + 1
            ];
            return (
              <Point
                key={x + '-' + y}
                x={xScale(x)}
                y={yScale(y)}
                fill={colorScale[i]}
                isPulsing={year === maxYear}
                label={year}
                isLabelVisible={markedYears.includes(year)}
                avoidX={xScale(avoidPoint[0])}
                avoidY={yScale(avoidPoint[1])}
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

ScatterPlot.defaultProps = {
  showGuides: [],
};

export default injectSheet(styles)(ScatterPlot);
