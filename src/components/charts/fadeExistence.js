import React, { Component } from 'react';
import injectSheet from 'react-jss';

const ANIM_DURATION = '0.4s';
const DELAY_BETWEEN = 120;

const styles = {
  show: {
    transitionDuration: ANIM_DURATION,
    opacity: 1,
  },
  hide: {
    transitionDuration: ANIM_DURATION,
    opacity: 0,
  },
};

const fadeExistence = WrappedComponent => {
  class FadeComponent extends Component {
    state = {
      fadeIn: false,
    };

    // We track timeout ID so we have the ability to cancel any
    // scheduled animation
    timeoutID = null;

    componentDidMount() {
      if (this.props.isVisible) {
        this.setState({ fadeIn: true });
      }
    }

    componentDidUpdate(prevProps) {
      const { isVisible, queuePosition } = this.props;
      const { isVisible: prevIsVisible } = prevProps;

      // Point wasn't visible, now it is
      if (!prevIsVisible && isVisible) {
        // Schedule visibility according to queue position
        this.timeoutID = setTimeout(() => {
          if (this.props.isVisible) {
            this.setState({ fadeIn: true });
          }
        }, queuePosition * DELAY_BETWEEN);
      }

      // Point was visible, now it isn't
      if (prevIsVisible && !isVisible) {
        // Cancel any scheduled animation
        clearTimeout(this.timeoutID);
        this.setState({ fadeIn: false });
      }
    }

    render() {
      const { fadeIn } = this.state;
      const { classes, isVisible, queuePosition, ...otherProps } = this.props;

      return (
        <g className={fadeIn ? classes.show : classes.hide}>
          <WrappedComponent {...otherProps} />
        </g>
      );
    }
  }
  return injectSheet(styles)(FadeComponent);
};

export default fadeExistence;
