import React, { Component } from 'react';
import injectSheet from 'react-jss';
import LineChart from './LineChart';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    '& > svg': {
      margin: '0 15px',
    },
  },
};

class CountsGraphs extends Component {
  render() {
    const { classes, names, noTitle } = this.props;
    return (
      <div className={classes.container}>
        {names.map((name, i) => (
          <LineChart
            key={name}
            dataName={name}
            big={names.length === 1}
            small={names.length > 2}
            noTitle={noTitle}
            noYlabel={i > 0}
          />
        ))}
      </div>
    );
  }
}

export default injectSheet(styles)(CountsGraphs);
