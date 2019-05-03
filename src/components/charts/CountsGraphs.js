import React, { Component } from 'react';
import injectSheet from 'react-jss';
import LineChart from './LineChart';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > svg': {
      margin: '0 15px',
    },
  },
};

class CountsGraphs extends Component {
  render() {
    const { classes, names } = this.props;
    return (
      <div className={classes.container}>
        {names.map(name => <LineChart dataName={name} />)}
      </div>
    );
  }
}

export default injectSheet(styles)(CountsGraphs);
