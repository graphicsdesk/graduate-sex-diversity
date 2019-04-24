import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { LINE_ANIM_DURATION, QUEUE_DELAY } from '../constants';

const styles = {
  hide: {
    transitionDuration: `${LINE_ANIM_DURATION * 1.5}ms`,
    opacity: 0,
    visibility: 'hidden',
    position: ({ positionAbsolute }) =>
      positionAbsolute ? 'absolute' : 'static',
  },
  show: {
    transitionDuration: `${LINE_ANIM_DURATION * 1.5}ms`,
    opacity: 1,
    visibility: 'visible',
    position: ({ positionAbsolute }) =>
      positionAbsolute ? 'absolute' : 'static',
  },
};

class FadeDivWrapper extends Component {
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
      <div className={fadeIn ? classes.show : classes.hide}>{children}</div>
    );
  }
}

FadeDivWrapper.defaultProps = {
  queuePosition: 0,
};

export default injectSheet(styles)(FadeDivWrapper);
