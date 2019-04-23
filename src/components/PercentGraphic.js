import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { PercentGraph } from './charts';

const styles = {
  Graphic: {
    margin: '1.5rem 0',
  },
  stickyFigure: {
    height: '100vh',
    width: '100%',
    top: 0,
    margin: 0,
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepsContainer: {
    overflow: 'auto',
    paddingBottom: '20vh',
  },
  step: {
    position: 'relative',
    marginBottom: '80vh',
    display: 'flex',
    justifyContent: 'center',
  },
  stepText: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '510px',
    textAlign: 'center',
    color: '#222',
    padding: '1.1rem',
    fontSize: '1.1rem',
    fontFamily: 'Merriweather',
    fontWeight: 400,
    lineHeight: '1.9rem',
  },
};

class PercentGraphic extends Component {
  state = { stepIndex: -1 };

  constructor(props) {
    super(props);
    const { steps } = this.props;

    // Keeping track of how the line is divided
    this.partitions = [];
    steps.forEach(
      ({ maxYear }) =>
        maxYear &&
        !this.partitions.includes(maxYear) &&
        this.partitions.push(maxYear),
    );
  }

  onStepEnter = ({ data: stepIndex }) => {
    this.setState({ stepIndex });
  };

  render() {
    const { stepIndex } = this.state;
    const { classes, steps } = this.props;
    let step = {
      maxYear: 1993,
      showPeers: false,
    };
    if (stepIndex >= 0) step = steps[stepIndex];
    const { maxYear, showPeers } = step;

    return (
      <div className={classes.Graphic}>
        <figure className={classes.stickyFigure}>
          <PercentGraph
            dataName="overall"
            maxYear={maxYear}
            showPeers={showPeers}
            partitions={this.partitions}
          />
        </figure>
        <div className={classes.stepsContainer}>
          <Scrollama offset={0.45} onStepEnter={this.onStepEnter}>
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
      </div>
    );
  }
}

export default injectSheet(styles)(PercentGraphic);
