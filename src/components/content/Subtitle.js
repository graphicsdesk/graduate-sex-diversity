import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Subtitle: {
    padding: '0 20px',
    maxWidth: '540px',
    margin: '0 auto 2rem auto',
    lineHeight: 1.6,
    fontSize: '0.97rem',
    color: '#888',
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
};

const Subtitle = ({ classes, text }) => (
  <p className={classes.Subtitle} dangerouslySetInnerHTML={{ __html: text }} />
);

export default injectSheet(styles)(Subtitle);
