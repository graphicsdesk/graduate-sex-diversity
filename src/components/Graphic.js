import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { ScatterPlot } from './charts';

const styles = {
  Graphic: {
    margin: '50vh 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  stickyFigure: {
    height: '100vh',
    top: 0,
    margin: 0,
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepsContainer: {
    padding: '50vh 5vw',
  },
  step: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '350px',
    margin: '0 auto',
    paddingBottom: '130px',
    color: '#aaa',
    transitionDuration: '0.2s',
  },
  stepText: {
    fontSize: '1.06rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    lineHeight: '1.9rem',
  },
};

class Graphic extends Component {
  state = { stepIndex: 0 };

  onStepEnter = ({ element, data: stepIndex }) => {
    this.setState({ stepIndex });
    element.style.color = '#222';
  };

  onStepExit = ({ element }) => (element.style.color = '#aaa');

  render() {
    const { classes, steps } = this.props;
    const step = steps[this.state.stepIndex];

    return (
      <div className={classes.Graphic}>
        <div className={classes.stepsContainer}>
          <Scrollama
            offset={0.4}
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
          >
            {steps.map((step, i) => (
              <Step data={i} key={step.text}>
                <div className={classes.step}>
                  <p
                    className={classes.stepText}
                    dangerouslySetInnerHTML={{ __html: step.text }}
                  />
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>
        <figure className={classes.stickyFigure}>
          <ScatterPlot
            dataName="Mechanical engineering"
            maxYear={step.maxYear}
            isLineVisible={step.isLineVisible}
          />
        </figure>
      </div>
    );
  }
}

export default injectSheet(styles)(Graphic);
