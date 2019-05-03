import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Paragraph: {
    padding: '0 20px',
    maxWidth: '500px',
    margin: '0 auto 2rem auto',
    lineHeight: 1.9,
    fontSize: '1.03rem',
    fontFamily: 'Merriweather',
  },
};

const Paragraph = ({ classes, text }) => (
  <p className={classes.Paragraph} dangerouslySetInnerHTML={{ __html: text }} />
);

export default injectSheet(styles)(Paragraph);
