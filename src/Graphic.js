import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import ScatterPlot from './ScatterPlot';

const styles = {
  stickyFigure: {
    position: 'sticky',
  },
  step: {},
  stepText: {},
};

class Graphic extends Component {
  render() {
    const { classes, steps } = this.props;

    return (
      <div>
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
