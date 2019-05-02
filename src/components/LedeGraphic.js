import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { ScatterPlot } from './charts';

const styles = {
  Graphic: {
    margin: '1.5rem 0',
    display: 'flex',
    justifyContent: 'space-evenly',
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
    margin: '50vh 0 ',
  },
  step: {
    maxWidth: '350px',
    margin: '0 auto',
    paddingBottom: '220px',
    color: '#aaa',
    transitionDuration: '0.2s',
  },
  stepText: {
    fontSize: '1.05rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    margin: 0,
    lineHeight: '1.9rem',
  },
};

class LedeGraphic extends Component {
  state = {
    stepIndex: -1,
  };

  onStepEnter = ({ data: stepIndex, element }) => {
    this.setState({ stepIndex });
    element.style.color = '#222';
  };

  onStepExit = ({ data: stepIndex, direction, element }) => {
    if (direction === 'up' && stepIndex === 0) this.setState({ stepIndex: -1 });
    element.style.color = '#aaa';
  };

  render() {
    const { stepIndex } = this.state;
    const { classes, steps } = this.props;
    let step = {
      maxYear: 1993,
      showAxesIndicators: true,
    };
    if (stepIndex >= 0) {
      step = steps[stepIndex];
    }

    const { maxYear, guides, showLine, field = 'TOTALS' } = step;
    let { showAxesIndicators } = step;
    if (stepIndex <= 0) {
      showAxesIndicators = true;
    }

    return (
      <div>
        <div className={classes.Graphic}>
          <div className={classes.stepsContainer}>
            <Scrollama
              offset={0.45}
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
          <figure className={classes.stickyFigure}>
            <ScatterPlot
              dataName={field}
              title="Graduate students in science and engineering"
              maxYear={maxYear}
              guides={guides}
              showLine={showLine}
              showAxesIndicators={showAxesIndicators}
            />
          </figure>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(LedeGraphic);
