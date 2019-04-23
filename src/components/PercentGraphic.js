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
  },
  step: {
    paddingBottom: '70vh',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
  },
  stepText: {
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px 0 rgba(0,0,0,0.41)',
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

class Graphic extends Component {
  state = { stepIndex: -1 };

  onStepEnter = ({ data: stepIndex }) => {
    this.setState({ stepIndex });
  };

  render() {
    const { classes } = this.props;

    const steps = [
      '1',
      '2',
      '3',
      '4',
    ];

    return (
      <div className={classes.Graphic}>
        <figure className={classes.stickyFigure}>
          <PercentGraph dataName="Overall" />
        </figure>
        <div className={classes.stepsContainer}>
          <Scrollama
            offset={0.45}
            onStepEnter={this.onStepEnter}
          >
            {steps.map((text, i) => (
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

export default injectSheet(styles)(Graphic);
