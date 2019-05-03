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
  SCATTER_BREAK,
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
  [`@media (max-width: ${SCATTER_BREAK}px)`]: {
    axisLabel: {
      fontSize: '.9rem',
    },
  },
};

const TICK_PADDING = 9;
const margin = { top: 40, right: 20, bottom: 50, left: 70 };

class ScatterPlot extends Component {
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
      this.data = COUNTS[dataName];
    } else {
      this.data = COUNTS[dataName][COLUMBIA_NAME];
    }
    return {
      ...this.calculateSize(),

      maxYear: this.props.maxYear,
      previousMaxYear: START_YEAR,
      markedYears: [START_YEAR, END_YEAR],
    };
  };

  calculateSize = () => {
    const { dataName } = this.props;

    let NUM_TICKS = 8;

    let width = window.innerWidth * 0.5;
    if (window.innerWidth < SCATTER_BREAK) {
      width = Math.min(window.innerWidth * 0.9, window.innerHeight * 0.9);
    }
    if (width < 576) {
      NUM_TICKS = 5;
    }

    // Calculate svg and root group's dimensions

    const height = width;
    const gWidth = width - margin.left - margin.right;
    const gHeight = height - margin.top - margin.bottom;

    // Construct scales and axes from data

    let upperLimit = maxCoord(this.data);
    if (dataName === 'Mechanical engineering') upperLimit *= 1.02;
    else upperLimit *= 1.1;
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

  // Stores all unique maxYears in this.state.markedYears so we can
  // label those points along the way
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
    const {
      classes,
      dataName,
      guides,
      showLine,
      showAxesIndicators,
    } = this.props;
    let AX_LABEL_SPACING = 45;
    if (window.innerWidth < SCATTER_BREAK) AX_LABEL_SPACING = 40;

    const lineGenerator = d3Line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));
    // patched line generator connects all defined points, skipping null values
    const patchedLineGenerator = data =>
      lineGenerator(data.filter(d => d[0] !== null && d[1] !== null));

    return (
      <svg width={width} height={height}>
        <defs>
          <FullArrowHead dataName={dataName} />
          <SkinnyArrowHead dataName={dataName} />
        </defs>

        <g transform={`translate(${margin.left}, ${margin.top})`}>
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
            Number of female students
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
            Number of male students
          </text>

          {/* Proportion guides */}
          {POSSIBLE_GUIDES.map(proportion => (
            <Guide
              key={proportion}
              line={lineGenerator}
              upperLimit={upperLimit}
              proportion={proportion}
              isVisible={guides.includes(proportion)}
            />
          ))}

          {/* MORE MEN and MORE MEN direction indicators */}
          <FadeWrapper isVisible={guides.length > 0}>
            <SkinnyArrow
              x={xScale(upperLimit * 0.65)}
              y={yScale(upperLimit * 0.65)}
              gHeight={gHeight}
              orient={-1}
              dataName={dataName}
              label="MORE MALE STUDENTS"
            />
            <SkinnyArrow
              x={xScale(upperLimit * 0.65)}
              y={yScale(upperLimit * 0.65)}
              gHeight={gHeight}
              orient={1}
              dataName={dataName}
              label="MORE FEMALE STUDENTS"
            />
          </FadeWrapper>

          {/* Axes indicators */}
          <FadeWrapper isVisible={showAxesIndicators}>
            <FullArrow
              x={xScale(upperLimit / 10)}
              y={yScale(this.data[0][1] + upperLimit / 4)}
              gHeight={gHeight}
              orient="up"
              line1="NUMBER"
              line2="OF MALE"
              line3="STUDENTS"
              dataName={dataName}
            />
            <FullArrow
              x={xScale(upperLimit * 0.4)}
              y={yScale(this.data[0][1])}
              gHeight={gHeight}
              orient="right"
              line1="NUMBER"
              line2="OF FEMALE"
              line3="STUDENTS"
              dataName={dataName}
            />
          </FadeWrapper>

          {/* Main data line */}
          <Line
            d={patchedLineGenerator(this.data)}
            className={classes.line}
            isVisible={showLine}
            queuePosition={
              maxYear -
              (previousMaxYear < START_YEAR ? START_YEAR : previousMaxYear)
            }
            color="#333"
            strokeWidth={1.2}
          />

          {this.data.map((point, i) => {
            const [x, y] = point;
            if (x === null || y === null) {
              return null;
            }
            const year = START_YEAR + i;
            let avoidPoint = this.data[
              i >= this.data.length - 1 ? i - 1 : i + 1
            ];
            return (
              <Point
                key={dataName + '-' + x + '-' + y + '-' + i}
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
  guides: [],
};

export default injectSheet(styles)(ScatterPlot);
