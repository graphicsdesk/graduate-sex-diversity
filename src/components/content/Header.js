import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Header: {
    marginTop: '208px',
    marginBottom: '0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Lato',
  },
  headline: {
    margin: '0 0 1rem 0',
    width: '85vw',
    maxWidth: '810px',
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '2.7rem',
    lineHeight: '1.6',
    color: '#333',
  },
  meta: {
    fontSize: '1.05rem',
    fontFamily: 'Roboto',
    marginBottom: 0,
  },
  byline: {
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#111',
    '& a': {
      color: '#111',
      textDecoration: 'none',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
  color: {
    color: '#ff9033',
    fontWeight: 700,
  },
  '@media (max-width: 768px)': {
    Header: {
      padding: '0 15px',
    },
    headline: {
      width: '100%',
      fontSize: '7vw',
    },
  },
};

const Header = ({ classes, headline }) => (
  <div className={classes.Header}>
    <p className={classes.headline}>
      In Certain Science and Engineering Fields, <span className={classes.color}>Sex Diversity</span> Among
      Graduate Students Is <span className={classes.color}>Stagnating</span>. In
      Others, It’s <span className={classes.color}>Getting Worse</span>.
    </p>
    <p className={classes.meta}>
      <span className={classes.byline}>By <a href="https://www.columbiaspectator.com/contributors/Jason-Kao">Jason Kao</a></span> | May 3, 2019
    </p>
  </div>
);

export default injectSheet(styles)(Header);
