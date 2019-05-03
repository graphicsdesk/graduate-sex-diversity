import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Header: {
    marginTop: '4rem',
    marginBottom: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Lato',
  },
  headline: {
    margin: '0 0 1.7rem 0',
    width: '65vw',
    maxWidth: '825px',
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '2.6rem',
    lineHeight: 1.4,
    color: '#333',
  },
  meta: {
    fontSize: '1.1rem',
    fontFamily: 'Roboto',
  },
  byline: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
};

const Header = ({ classes, headline }) => (
  <div className={classes.Header}>
    <p className={classes.headline}>{headline}</p>
    <p className={classes.meta}>
      <span className={classes.byline}>By Jason Kao</span> | May 3, 2019
    </p>
  </div>
);

export default injectSheet(styles)(Header);
