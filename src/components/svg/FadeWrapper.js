import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { LINE_ANIM_DURATION, QUEUE_DELAY } from '../../constants';

const styles = {
  transition: {
    transitionDuration: `${LINE_ANIM_DURATION * 1.5}ms`,
  },
};

class FadeWrapper extends Component {
  state = {
    fadeIn: false,
  };

  timeoutID = null;

  componentDidMount() {
    if (this.props.isVisible) {
      this.setState({ fadeIn: true });
    }
  }

  componentDidUpdate(prevProps) {
    const { isVisible, queuePosition } = this.props;
    const { isVisible: prevIsVisible } = prevProps;

    if (!prevIsVisible && isVisible) {
      this.timeoutID = setTimeout(() => {
        this.setState({ fadeIn: true });
      }, queuePosition * QUEUE_DELAY);
    }

    if (prevIsVisible && !isVisible) {
      clearTimeout(this.timeoutID);
      this.setState({ fadeIn: false });
    }
  }

  render() {
    const { fadeIn } = this.state;
    const { classes, children } = this.props;

    return (
      <g opacity={fadeIn ? 1 : 0} className={classes.transition}>
        {children}
      </g>
    );
  }
}

FadeWrapper.defaultProps = {
  queuePosition: 0,
};

export default injectSheet(styles)(FadeWrapper);
