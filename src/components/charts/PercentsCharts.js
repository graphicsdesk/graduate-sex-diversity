import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PercentChart from './PercentChart';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: '2rem',
    '& > svg': {
      marginBottom: '2rem',
    },
  },
};

class PercentsCharts extends Component {
  render() {
    const { classes, names, colors, firstColumn = false } = this.props;
    return (
      <div className={classes.container}>
        {names.map((name, i) => (
          <PercentChart
            key={name}
            dataName={name}
            colors={colors}
            showYlabel={firstColumn && i === 0}
          />
        ))}
      </div>
    );
  }
}

export default injectSheet(styles)(PercentsCharts);
