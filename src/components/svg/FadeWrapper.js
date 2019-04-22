import React, { Component } from 'react';
import injectSheet from 'react-jss';

/* TODO: SET THESE CONSTANTS IN CONSTANTS FILE */
const ANIM_DURATION = 420;
const DELAY_BETWEEN = ANIM_DURATION / 3;

const styles = {
  transition: {
    transitionDuration: `${ANIM_DURATION * 1.5}ms`,
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
      }, queuePosition * DELAY_BETWEEN);
    }

    if (prevIsVisible && !isVisible) {
      clearTimeout(this.timeoutID);
      this.setState({ fadeIn: false });
    }
  }

  render() {
    const { fadeIn } = this.state;
    const {
      classes,
      isVisible,
      queuePosition,
      children,
      ...otherProps
    } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, otherProps),
    );

    return (
      <g opacity={fadeIn ? 1 : 0} className={classes.transition}>
        {childrenWithProps}
      </g>
    );
  }
}

FadeWrapper.defaultProps = {
  queuePosition: 0,
};

export default injectSheet(styles)(FadeWrapper);
