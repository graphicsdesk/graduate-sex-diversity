import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import { select as d3Select } from 'd3-selection';
import 'd3-transition';
import { FadeWrapper } from './index';
import { QUEUE_DELAY } from '../../constants';

const styles = {
  pulse: {
    animation: 'infinite 1s pulse',
  },
  pointLabel: {
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

class Line extends Component {
  ref = React.createRef();
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
        .duration(2000)
        .attr('stroke-dashoffset', 0)
        .on('end', () => this.setState({ isEndpointVisible: true }));
    }
  }

  componentDidUpdate(prevProps) {
    const { isVisible, queuePosition } = this.props;
    const { current: node } = this.ref;
    if (!node) return;

    if (!prevProps.isVisible && isVisible) {
      // Animate in
      const length = node.getTotalLength();
      d3Select(node)
        .attr('opacity', 1)
        .attr('stroke-dasharray', length)
        .attr('stroke-dashoffset', length)
        .transition()
        .delay(queuePosition * QUEUE_DELAY)
        .duration(2000)
        .attr('stroke-dashoffset', 0)
        .on('end', () => this.setState({ isEndpointVisible: true }));
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
    const {
      classes,
      d,
      color,
      strokeWidth,
      showEndpoint,
      endpoint = [],
      endpointLabel,
    } = this.props;

    return (
      <Fragment>
        <path
          ref={this.ref}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0}
        />
        {endpoint.length === 2 && (
          <FadeWrapper isVisible={showEndpoint && this.state.isEndpointVisible}>
            <circle
              className={classes.pulse}
              cx={endpoint[0]}
              cy={endpoint[1]}
              r={7}
              fill={color}
              stroke={color}
            />
            <text
              className={classes.pointLabel}
              x={endpoint[0]}
              y={endpoint[1] + 28}
              fill={color}
            >
              {endpointLabel}
            </text>
          </FadeWrapper>
        )}
      </Fragment>
    );
  }
}

Line.defaultProps = {
  queuePosition: 0,
};

export default injectSheet(styles)(Line);
