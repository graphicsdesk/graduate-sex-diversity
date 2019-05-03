import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Paragraph, Title } from './content';
import { ScatterPlot } from './charts';
import { END_YEAR, START_YEAR } from '../constants';

const styles = {
  Graphic: {
    margin: '1.5rem 0',
  },
  plotContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
};

class AreaGraphic extends Component {
  render() {
    const { classes, steps } = this.props;

    return (
      <div className={classes.Graphic}>
        {steps.map(step => {
          const { type, value } = step;
          if (type === 'title') return <Title text={value} />;
          else if (type === 'text') return <Paragraph text={value} />;
          else if (type === 'scatter')
            return (
              <div className={classes.plotContainer}>
                <ScatterPlot
                  dataName={value}
                  maxYear={END_YEAR}
                  guides={[0.5]}
                  individual
                  showLine
                />
              </div>
            );
        })}
      </div>
    );
  }
}

export default injectSheet(styles)(AreaGraphic);
