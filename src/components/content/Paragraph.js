import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Paragraph: {
    padding: '0 20px',
    maxWidth: '460px',
    margin: '0 auto 1.6rem auto',
    lineHeight: 1.9,
    fontSize: '1.1rem',
    fontFamily: 'Merriweather',
  },
};

const Paragraph = ({ classes, text }) => (
  <p className={classes.Paragraph}>
    {text}
  </p>
);

export default injectSheet(styles)(Paragraph);
