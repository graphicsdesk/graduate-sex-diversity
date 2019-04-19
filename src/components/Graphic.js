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
  render() {
    const { classes, steps } = this.props;

    return (
      <div className={classes.Graphic}>
        <figure className={classes.stickyFigure}>
          <ScatterPlot dataName="Mechanical engineering" />
        </figure>
        <article className={classes.stepsContainer}>
          <Scrollama offset={0.4} onStepEnter={this.onStepEnter}>
            {steps.map(step => (
              <Step data={step} key={step}>
                <div className={classes.step}>
                  <p
                    className={classes.stepText}
                    dangerouslySetInnerHTML={{ __html: step }}
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
