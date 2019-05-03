import React, { Component } from 'react';
import injectSheet from 'react-jss';
import LineChart from './LineChart';
import PercentChart from './PercentChart';

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

class GraphPair extends Component {
  render() {
    const { classes, name } = this.props;
    return (
      <div className={classes.container}>
        <LineChart dataName={name} />
        <PercentChart dataName={name} />
      </div>
    );
  }
}

export default injectSheet(styles)(GraphPair);
