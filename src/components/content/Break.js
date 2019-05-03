import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Break: {
    padding: '0 20px',
    maxWidth: '500px',
    textAlign: 'center',
    margin: '0 auto 2rem auto',
    lineHeight: 1.9,
    fontSize: '1.03rem',
    fontFamily: 'Merriweather',
  },
};

const Break = ({ classes, text }) => <p className={classes.Break}>* * *</p>;

export default injectSheet(styles)(Break);
