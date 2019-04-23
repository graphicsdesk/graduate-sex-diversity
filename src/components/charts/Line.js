import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import { select as d3Select } from 'd3-selection';
import 'd3-transition';
import { FadeWrapper } from '../svg';

const styles = {
  pulse: {
    animation: 'infinite 1s pulse',
  },
  '@keyframes pulse': {
    from: {
      strokeWidth: 0,
      strokeOpacity: 1,
    },
    to: {
      strokeWidth: 19,
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
    if (this.props.isVisible) d3Select(this.ref.current).attr('opacity', 1);
  }

  componentDidUpdate(prevProps) {
    const { isVisible } = this.props;
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
      endpoint = [],
      showEndpoint,
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
              r={6}
              fill={color}
              stroke={color}
            />
          </FadeWrapper>
        )}
      </Fragment>
    );
  }
}

export default injectSheet(styles)(Line);
