import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import stickybits from 'stickybits';
import injectSheet from 'react-jss';
import { ScatterPlot } from './charts';
import { START_YEAR, SCATTER_BREAK } from '../constants';

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
    zIndex: -1,
  },
  stepsContainer: {
    zIndex: 1,
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

  [`@media (max-width: ${SCATTER_BREAK}px)`]: {
    Graphic: {
      flexDirection: 'column-reverse',
      justifyContent: 'flex-start',
    },
    stepsContainer: {
      margin: '10vh 0 ',
    },
    step: {
      maxWidth: '350px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#222',
      padding: '15px',
      marginBottom: '80vh',
    },
    stepText: {
      color: '#222',
    },
  },
};

const STICKY_ID = 'sticky-lede-graphic';

stickybits(STICKY_ID);

class ScatterGraphic extends Component {
  state = {
    title: 'Engineering', // this.props.steps[0].title,
    stepIndex: -1,
  };

  onStepEnter = ({ data: stepIndex, element }) => {
    this.setState({ stepIndex });
    if (window.innerWidth >= SCATTER_BREAK) element.style.color = '#222';
  };

  onStepExit = ({ data: stepIndex, direction, element }) => {
    if (direction === 'up' && stepIndex === 0) this.setState({ stepIndex: -1 });
    if (window.innerWidth >= SCATTER_BREAK) element.style.color = '#aaa';
  };

  render() {
    const { stepIndex } = this.state;
    const { classes, steps } = this.props;
    let step = {
      maxYear: START_YEAR - 1,
      field: 'Engineering',
    };
    if (stepIndex >= 0) {
      step = steps[stepIndex];
    }
    let {
      field,
      maxYear,
      showAxesIndicators,
      guides,
      showLine,
    } = step;
    if (stepIndex <= 0) {
      showAxesIndicators = true;
    }

    return (
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
        <figure className={classes.stickyFigure} id={STICKY_ID}>
          <ScatterPlot
            dataName={field}
            maxYear={maxYear}
            guides={guides}
            showLine={showLine}
            showAxesIndicators={showAxesIndicators}
          />
        </figure>
      </div>
    );
  }
}

export default injectSheet(styles)(ScatterGraphic);
