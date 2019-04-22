import React, { Component } from 'react';
import { select as d3Select } from 'd3-selection';
import 'd3-transition';

class Line extends Component {
  ref = React.createRef();

  componentDidUpdate(prevProps) {
    const { current: node } = this.ref;
    if (!node)
      return;

    if (!prevProps.isVisible && this.props.isVisible) {
      // Animate in line
      const length = node.getTotalLength();
      d3Select(node)
        .attr('stroke-dasharray', length)
        .attr('stroke-dashoffset', length)
        .transition()
        .duration(2000)
        .attr('stroke-dashoffset', 0);
    } else if (prevProps.isVisible && !this.props.isVisible) {
      d3Select(node)
        .attr('opacity', 1)
        .transition()
        .attr('opacity', 0);
    }
  }

  render() {
    return (
      <path
        ref={this.ref}
        d={this.props.d}
        fill="none"
        stroke="#333"
        strokeWidth={1.2}
      />
    );
  }
}

export default Line;
