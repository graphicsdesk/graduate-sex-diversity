import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { ScatterPlot } from './charts';
import { END_YEAR } from '../constants';

const styles = {
  ScatterRow: {
    margin: '4rem 0',
    display: 'flex',
    justifyContent: 'center',
  },
};

class ScatterRow extends Component {
  render() {
    const { classes, fields } = this.props;

    return (
      <div className={classes.ScatterRow}>
        {fields.map(field => (
          <ScatterPlot
            key={field}
            field={field}
            dataName={field}
            maxYear={END_YEAR}
            showGuides={[0.5]}
            noArrows
            showLine
            inRow
          />
        ))}
      </div>
    );
  }
}

export default injectSheet(styles)(ScatterRow);
