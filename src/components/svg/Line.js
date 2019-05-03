import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import nanoid from 'nanoid';
import { select as d3Select } from 'd3-selection';
import 'd3-transition';
import { FadeWrapper } from './index';
import { QUEUE_DELAY } from '../../constants';

const styles = {
  pulse: {
    animation: 'infinite 1s pulse',
  },
  path: {
    '&:hover + text': {
      opacity: 1,
    },
  },
  lineName: {
    fontSize: '1rem',
    fontFamily: 'Roboto',
    opacity: 0,
    transitionDuration: '.3s',
    pointerEvents: 'none',
  },
  backgroundText: {
    stroke: '#fff',
    strokeWidth: 4,
    opacity: 0.85,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 500,
    textAnchor: 'middle',
  },
  text: {
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 500,
    textAnchor: 'middle',
  },
  '@keyframes pulse': {
    from: {
      strokeWidth: 0,
      strokeOpacity: 1,
    },
    to: {
      strokeWidth: 18,
      strokeOpacity: 0,
    },
  },
};

const LABEL_SPACING = 15;

const LINE_ANIM_TIME = 2000;

class Line extends Component {
  ref = React.createRef();
  pathId = nanoid();
  state = {
    isEndpointVisible: false,
  };

  componentDidMount() {
    const { current: node } = this.ref;
    if (!node) return;
    if (this.props.isVisible) {
      const length = node.getTotalLength();
      d3Select(node)
        .attr('opacity', 1)
        .attr('stroke-dasharray', length)
        .attr('stroke-dashoffset', length)
        .transition()
        .duration(LINE_ANIM_TIME)
        .attr('stroke-dashoffset', 0)
        .on('end', () => this.setState({ isEndpointVisible: true }));
    }
  }

  componentDidUpdate(prevProps) {
    const { isVisible, queuePosition, d, name } = this.props;
    const { current: node } = this.ref;
    if (!node) return;

    if (
      (!prevProps.isVisible && isVisible) ||
      (isVisible && prevProps.d !== d)
    ) {
      // Animate in
      const length = node.getTotalLength();
      d3Select(node)
        .attr('opacity', 1)
        .attr('stroke-dasharray', length)
        .attr('stroke-dashoffset', length)
        .transition()
        .delay(queuePosition * QUEUE_DELAY)
        .duration(LINE_ANIM_TIME)
        .attr('stroke-dashoffset', 0);
      setTimeout(
        () => this.setState({ isEndpointVisible: true }),
        name === 'TOTALS' ? LINE_ANIM_TIME * 0.6 : LINE_ANIM_TIME,
      );
    } else if (prevProps.isVisible && !isVisible) {
      // Animate out
      this.setState({ isEndpointVisible: false });
      d3Select(node)
        .attr('opacity', 1)
        .transition()
        .attr('opacity', 0);
    }
  }

  render() {
    const { isEndpointVisible } = this.state;
    const {
      classes,
      d,
      color,
      strokeWidth,
      labels = [],
      name,
      isVisible,
    } = this.props;

    return (
      <Fragment>
        <path
          ref={this.ref}
          className={classes.path}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0}
          id={this.pathId}
        />
        {name &&
        isEndpointVisible && (
          <text className={classes.lineName} fill={color}>
            <textPath href={'#' + this.pathId}>{name}</textPath>
          </text>
        )}
        {labels.length > 0 &&
          labels.map(({ x, y, r = 7, label, isPulsing = true }, i) => (
            <FadeWrapper
              key={x + '-' + y + '-' + label}
              isVisible={isVisible && isEndpointVisible}
            >
              <circle
                className={
                  i === labels.length - 1 && isPulsing ? (
                    classes.pulse
                  ) : (
                    undefined
                  )
                }
                cx={x}
                cy={y}
                r={r}
                fill={color}
                stroke={color}
              />
              <text fill={color}>
                <tspan
                  x={x}
                  y={y - LABEL_SPACING}
                  className={classes.backgroundText}
                >
                  {label}
                </tspan>
                <tspan x={x} y={y - LABEL_SPACING} className={classes.text}>
                  {label}
                </tspan>
              </text>
            </FadeWrapper>
          ))}
      </Fragment>
    );
  }
}

Line.defaultProps = {
  queuePosition: 0,
};

export default injectSheet(styles)(Line);
