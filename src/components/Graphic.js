import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { ScatterPlot } from './graphs';

const styles = {
  Graphic: {
    height: '200vh',
  },
  stickyFigure: {
    height: '100vh',
    top: 0,
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
  },
  stepsContainer: {},
  step: {},
  stepText: {},
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
        <article className={classes.stepsContainer}>
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
        </article>
      </div>
    );
  }
}

export default injectSheet(styles)(Graphic);
