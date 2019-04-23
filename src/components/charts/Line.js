import React, { Component } from 'react';
import { select as d3Select } from 'd3-selection';
import 'd3-transition';

class Line extends Component {
  ref = React.createRef();

  componentDidMount() {
    if (this.props.isVisible)
      d3Select(this.ref.current).attr('opacity', 1);
  }

  componentDidUpdate(prevProps) {
    const { current: node } = this.ref;
    if (!node) return;

    if (!prevProps.isVisible && this.props.isVisible) {
      // Animate in
      const length = node.getTotalLength();
      d3Select(node)
        .attr('opacity', 1)
        .attr('stroke-dasharray', length)
        .attr('stroke-dashoffset', length)
        .transition()
        .duration(2000)
        .attr('stroke-dashoffset', 0);
    } else if (prevProps.isVisible && !this.props.isVisible) {
      // Animate out
      d3Select(node)
        .attr('opacity', 1)
        .transition()
        .attr('opacity', 0);
    }
  }

  render() {
    const { strokeWidth } = this.props;
    return (
      <path
        ref={this.ref}
        d={this.props.d}
        fill="none"
        stroke="#333"
        strokeWidth={strokeWidth || 1.2}
        opacity={0}
      />
    );
  }
}

export default Line;
