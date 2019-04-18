import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';

const styles = {
  Graphic: {
    margin: 0,
  },
  steps: {
    padding: 0,
  },
  step: {
    padding: 0,
  },
  stepText: {
    padding: 0,
  },
};

class Graphic extends Component {
  render() {
    const { classes, steps } = this.props;

    return (
      <div className={classes.Graphic}>
        <figure className={classes.stickyFigure}>
        </figure>
        <article className={classes.stepsContainer}>
          <Scrollama offset={0.4} onStepEnter={this.onStepEnter}>
            {steps.map(step => (
              <Step data={step} key={step}>
                <div className={classes.step}>
                  <p className={classes.stepText} dangerouslySetInnerHTML={{ __html: step }}/>
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
