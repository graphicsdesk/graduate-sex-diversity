import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { FadeWrapper } from './svg';
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

    let { maxYear, guides, showLine, data: dataName } = step;
    if (!dataName) dataName = 'TOTALS';
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
            <FadeWrapper
              isVisible={dataName === 'TOTALS'}
              positionAbsolute
              useDiv
            >
              <ScatterPlot
                dataName={'TOTALS'}
                title="Graduate students in science and engineering"
                maxYear={maxYear}
                showLine={showLine}
                showAxesIndicators={showAxesIndicators}
                guides={guides}
              />
            </FadeWrapper>
            <FadeWrapper isVisible={dataName === 'Statistics'} useDiv>
              <ScatterPlot
                dataName={'Statistics'}
                title="Graduate students in statistics"
                maxYear={maxYear}
                showLine={showLine}
                showAxesIndicators={showAxesIndicators}
                guides={guides}
              />
            </FadeWrapper>
          </figure>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(LedeGraphic);
