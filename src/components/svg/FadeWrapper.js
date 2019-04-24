import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { LINE_ANIM_DURATION, QUEUE_DELAY } from '../../constants';

const styles = {
  transition: {
    transitionDuration: `${LINE_ANIM_DURATION * 1.5}ms`,
  },
  invisible: {
    transitionDuration: `${LINE_ANIM_DURATION * 1.5}ms`,
    opacity: 0,
    visibility: 'hidden',
    position: ({ positionAbsolute }) =>
      positionAbsolute ? 'absolute' : 'static',
  },
  visible: {
    transitionDuration: `${LINE_ANIM_DURATION * 1.5}ms`,
    opacity: 1,
    visibility: 'visible',
    position: ({ positionAbsolute }) =>
      positionAbsolute ? 'absolute' : 'static',
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
    const { classes, children, useDiv } = this.props;

    if (useDiv)
      return (
        <div className={fadeIn ? classes.visible : classes.invisible}>
          {children}
        </div>
      );

    return (
      <g opacity={fadeIn ? 1 : 0} className={classes.transition}>
        {children}
      </g>
    );
  }
}

FadeWrapper.defaultProps = {
  queuePosition: 0,
  isVisible: false,
};

export default injectSheet(styles)(FadeWrapper);
