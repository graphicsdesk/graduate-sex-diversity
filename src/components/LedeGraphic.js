import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import stickybits from 'stickybits';
import { PercentGraph } from './charts';

const styles = {
  Graphic: {
    margin: '1.5rem 0',
  },
  stickyFigure: {
    height: '100vh',
    width: '100%',
    top: 0,
    margin: 0,
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepsContainer: {
    overflow: 'auto',
    paddingBottom: '20vh',
  },
  step: {
    position: 'relative',
    marginBottom: '80vh',
    display: 'flex',
    justifyContent: 'center',
  },
  stepText: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '510px',
    textAlign: 'center',
    color: '#222',
    padding: '1.1rem',
    fontSize: '1.1rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    lineHeight: '1.9rem',

    // Fixes a problem in Safari where background color is transparent
    transform: 'translate3d(0, 0, 0)',
  },
};

const STICKY_ID = 'sticky-lede-graphic';

stickybits(STICKY_ID);

class LedeGraphic extends Component {
  state = { stepIndex: -1 };

  onStepEnter = ({ data: stepIndex }) => {
    this.setState({ stepIndex });
  };

  onStepExit = ({ data: stepIndex, direction }) => {
    if (direction === 'up' && stepIndex === 0) {
      this.setState({ stepIndex: -1 });
    }
  };

  render() {
    const { stepIndex } = this.state;
    const { classes, steps } = this.props;
    let step = {
      fields: [],
    };
    if (stepIndex >= 0) step = steps[stepIndex];
    const { fields = [] } = step;

    return (
      <div className={classes.Graphic}>
        <figure className={classes.stickyFigure} id={STICKY_ID}>
          <PercentGraph fields={fields} forceTitle={stepIndex === -1} />
        </figure>
        <div className={classes.stepsContainer}>
          <Scrollama
            offset={0.4}
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
          >
            {steps.map(({ text }, i) => (
              <Step data={i} key={text}>
                <div className={classes.step}>
                  <p
                    className={classes.stepText}
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(LedeGraphic);
