import React, { Component } from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import LedeGraphic from './LedeGraphic';
import { Header } from './content';
import { POSSIBLE_GUIDES } from '../constants';

const { headline, lede } = archieml.load(COPY);

// IMPORTANT: DON'T OVER COMPLICATE SETTINGS. e.g. BY DEFAULT, ADD AXES
// INDICATORS TO FIRST FRAME of connected scatters

const ledeSteps = lede.map(step => {
  const { guides, maxYear } = step;
  if (guides) {
    step.guides = step.guides.split(',').map(s => {
      if (!POSSIBLE_GUIDES.includes(+s))
        console.log(s + ' is not included in the possible guides.');
      return +s;
    });
  }
  if (maxYear) step.maxYear = +step.maxYear;
  return step;
});

class App extends Component {
  render() {
    return (
      <div>
        <Header headline={headline} />

        <LedeGraphic steps={ledeSteps} />
      </div>
    );
  }
}

export default App;
