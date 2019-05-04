import React from 'react';
import archieml from 'archieml';
import injectSheet from 'react-jss';
import COPY from '../copy';
import PercentsCharts from './charts/PercentsCharts';

const { names } = archieml.load(COPY);

const styles = {
  App: {
    display: 'flex',
    margin: '0 auto',
    marginTop: '5rem',
    width: '1280px',
    justifyContent: 'space-between',
  },
};

const COLORS = [
  {
    primary: '#00d385',
    secondary: '#75d9ae',
  },
  {
    primary: '#5c86ff',
    secondary: '#a1c5d2',
  },
  {
    primary: '#f00053',
    secondary: '#FEABC5',
  },
];

const App = ({ classes }) => (
  <div className={classes.App}>
    {names.map((list, i) => (
      <PercentsCharts
        firstColumn={i === 0}
        key={list}
        names={list.split(';').map(s => s.trim())}
        colors={COLORS[i]}
      />
    ))}
  </div>
);

export default injectSheet(styles)(App);
