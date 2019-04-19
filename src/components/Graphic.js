import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { ScatterPlot } from './charts';

const styles = {
  Graphic: {
    marginBottom: '1.7rem',
  },
  stickyFigure: {
    height: '100vh',
    top: 0,
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
  },
  stepsContainer: {
    overflow: 'auto',
    padding: '0 5vw 30vh 5vw',
  },
  step: {
    position: 'relative',
    margin: '0 auto 80vh auto',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '510px',
    padding: '1rem',
  },
  stepText: {
    textAlign: 'center',
    color: '#222',
    fontSize: '1.1rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    lineHeight: '1.9rem',
  },
};

class Graphic extends Component {
  state = { stepIndex: 0 };

  onStepEnter = ({ data: stepIndex }) => {
    this.setState({ stepIndex });
  };

  render() {
    const { classes, steps } = this.props;
    const step = steps[this.state.stepIndex];

    return (
      <div className={classes.Graphic}>
        <figure className={classes.stickyFigure}>
          <ScatterPlot
            dataName="Mechanical engineering"
            maxYear={step.maxYear}
          />
        </figure>
        <div className={classes.stepsContainer}>
          <Scrollama offset={0.4} onStepEnter={this.onStepEnter} debug>
            {steps.map((step, i) => (
              <Step data={i} key={step.maxYear}>
                <div className={classes.step}>
                  <p
                    className={classes.stepText}
                    dangerouslySetInnerHTML={{ __html: step.maxYear }}
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

export default injectSheet(styles)(Graphic);
