import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { FadeWrapper } from './svg';
import { ScatterPlot } from './charts';
import { START_YEAR } from '../constants';

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
  note: {
    color: '#aaa',
    fontSize: '0.9rem',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    lineHeight: 1.5,
    margin: 0,
    marginTop: '1rem',
    paddingTop: '0.8rem',
    borderTop: '0.8px solid #ddd',
  },
};

class ScatterGraphic extends Component {
  state = {
    stepIndex: -1,
  };

  fields = this.props.steps.reduce(
    (acc, step) => {
      const { field } = step;
      if (!field) return acc;
      if (!acc.includes(field)) acc.push(field);
      return acc;
    },
    ['TOTALS'],
  );

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
      maxYear: START_YEAR - 1,
      showAxesIndicators: true,
    };
    if (stepIndex >= 0) {
      step = steps[stepIndex];
    }

    let { maxYear, guides, showLine, field: stepField } = step;
    if (!stepField) stepField = 'TOTALS';
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
              {steps.map(({ text, note }, i) => (
                <Step data={i} key={text}>
                  <div className={classes.step}>
                    <p
                      className={classes.stepText}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                    {note && <p className={classes.note}>{note}</p>}
                  </div>
                </Step>
              ))}
            </Scrollama>
          </div>
          <figure className={classes.stickyFigure}>
            {this.fields.map((field, i) => (
              <FadeWrapper
                key={field}
                isVisible={stepField === field}
                positionAbsolute={i < this.fields.length - 1}
                useDiv
              >
                <ScatterPlot
                  dataName={field}
                  maxYear={stepField === field ? maxYear : START_YEAR - 1}
                  showLine={stepField === field && showLine}
                  showAxesIndicators={showAxesIndicators}
                  guides={guides}
                />
              </FadeWrapper>
            ))}
          </figure>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ScatterGraphic);
