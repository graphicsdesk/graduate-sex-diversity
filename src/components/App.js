import React from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import LedeGraphic from './LedeGraphic';
import AreaGraphic from './AreaGraphic';
import { Header, Paragraph } from './content';
import { POSSIBLE_GUIDES } from '../constants';

const { headline, lede, nutgraf, engineering } = archieml.load(COPY);

// IMPORTANT: DON'T OVER COMPLICATE SETTINGS. e.g. BY DEFAULT, ADD AXES
// INDICATORS TO FIRST FRAME of connected scatters

const ledeSteps = lede.map(step => {
  const { guides, maxYear } = step;
  if (guides) {
    step.guides = step.guides.split(',').map(s => {
      if (!POSSIBLE_GUIDES.includes(+s))
        console.error(s + ' is not included in the possible guides.');
      return +s;
    });
  }
  if (maxYear) step.maxYear = +step.maxYear;
  return step;
});

const App = () => (
  <div>
    <Header headline={headline} />
    <LedeGraphic steps={ledeSteps} />
    {nutgraf.map(text => <Paragraph key={text} text={text} />)}
    <AreaGraphic steps={engineering} />
  </div>
);

export default App;
