import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Header: {
    marginTop: '4rem',
    marginBottom: '1.3rem',
    display: 'flex',
    justifyContent: 'center',
  },
  headline: {
    margin: '0 0 1.7rem 0',
    width: '65vw',
    maxWidth: '825px',
    display: 'inline-block',
    fontFamily: 'Merriweather',
    fontSize: '2.6rem',
    lineHeight: 1.4,
    color: '#333',
  },
};

const Header = ({ classes, headline }) => (
  <div className={classes.Header}>
    <p className={classes.headline}>{headline}</p>
  </div>
);

export default injectSheet(styles)(Header);
