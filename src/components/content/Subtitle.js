import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Subtitle: {
    padding: '0 20px',
    maxWidth: '690px',
    margin: '3.5rem auto 2rem auto',
    lineHeight: 1.6,
    textAlign: 'center',
    fontSize: '2.4rem',
    fontFamily: 'Lato',
  },
};

const Subtitle = ({ classes, text }) => (
  <p className={classes.Subtitle}>{text}</p>
);

export default injectSheet(styles)(Subtitle);
