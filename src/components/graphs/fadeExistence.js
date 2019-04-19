import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const ANIM_DURATION = '0.3s';

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

    componentDidMount() {
      if (this.props.isVisible) {
        this.setState({ fadeIn: true });
      }
    }

    componentDidUpdate(prevProps) {
      const { fadeIn } = this.state;
      const { isVisible } = this.props;
      const { isVisible: prevIsVisible } = prevProps;

      if (isVisible && !fadeIn) {
        this.setState({ fadeIn: true });
      }
    }

    render() {
      const { fadeIn } = this.state;
      const { classes, isVisible, ...otherProps } = this.props;

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
