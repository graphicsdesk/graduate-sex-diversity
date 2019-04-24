import React, { Component } from 'react';
import injectSheet from 'react-jss';

/* TODO: SET THESE CONSTANTS IN CONSTANTS FILE */
const ANIM_DURATION = 420;
const DELAY_BETWEEN = ANIM_DURATION / 3;

const styles = {
  hide: {
    transitionDuration: `${ANIM_DURATION * 1.5}ms`,
    opacity: 0,
    position: ({ positionAbsolute }) =>
      positionAbsolute ? 'absolute' : 'static',
  },
  show: {
    transitionDuration: `${ANIM_DURATION * 1.5}ms`,
    opacity: 1,
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
      }, queuePosition * DELAY_BETWEEN);
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
