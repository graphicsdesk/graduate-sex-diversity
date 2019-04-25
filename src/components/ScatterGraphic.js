import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { ScatterPlot, PercentGraph } from './charts';
import { FadeWrapper } from './svg';
import { END_YEAR, START_YEAR } from '../constants';

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
    margin: '60vh 0',
  },
  step: {
    maxWidth: '350px',
    margin: '0 auto',
    paddingBottom: '220px',
    color: '#aaa',
    transitionDuration: '0.2s',
  },
  stepText: {
    fontSize: '1.06rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    margin: 0,
    lineHeight: '1.9rem',
  },
};

class ScatterGraphic extends Component {
  state = { stepIndex: -1 };

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
    const { classes, steps, dataName } = this.props;
    let step = {
      maxYear: 1993,
      showAxesIndicators: true,
    };
    if (stepIndex >= 0) step = steps[stepIndex];
    const {
      maxYear,
      showLine,
      showAxesIndicators,
      showGuides,
      showPercentGraph,
      fields,
    } = step;

    return (
      <div className={classes.Graphic}>
        <div className={classes.stepsContainer}>
          <Scrollama
            offset={0.45}
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
          <FadeWrapper isVisible={!showPercentGraph} positionAbsolute useDiv>
            <ScatterPlot
              dataName={dataName}
              maxYear={maxYear}
              showLine={showLine}
              showAxesIndicators={showAxesIndicators}
              showGuides={showGuides}
            />
          </FadeWrapper>
          <FadeWrapper isVisible={showPercentGraph} useDiv>
            <PercentGraph
              dataName={dataName}
              fields={fields}
              maxYear={showPercentGraph ? END_YEAR : START_YEAR}
              isSquare
            />
          </FadeWrapper>
        </figure>
      </div>
    );
  }
}

export default injectSheet(styles)(ScatterGraphic);
