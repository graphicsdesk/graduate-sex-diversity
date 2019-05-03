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
    '& span': {
      padding: '6px 7px',
    },
  },
  headline: {
    margin: '0 0 1.7rem 0',
    width: '65vw',
    maxWidth: '825px',
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '2.7rem',
    lineHeight: 1.6,
    color: '#333',
  },
  meta: {
    fontSize: '1.1rem',
    fontFamily: 'Roboto',
    marginBottom: 0,
  },
  byline: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  color1: {
    background: '#5c86ff',
    color: '#fff',
  },
  color2: {
    background: '#ff9b26',
    color: '#fff',
  },
};

const Header = ({ classes, headline }) => (
  <div className={classes.Header}>
    <p className={classes.headline}>
      In Certain <span className={classes.color1}>
        Science and Engineering
      </span>{' '}
      Fields, <span className={classes.color2}>Sex Diversity</span> Among
      Graduate Students Is Stagnating. In Others,{' '}
      <span className={classes.color2}>It’s Getting Worse</span>.
    </p>
    <p className={classes.meta}>
      <span className={classes.byline}>By Jason Kao</span> | May 3, 2019
    </p>
  </div>
);

export default injectSheet(styles)(Header);
