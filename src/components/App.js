import React from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import { POSSIBLE_GUIDES } from '../constants';
import { Header, Paragraph } from './content';
import LedeGraphic from './LedeGraphic';
import ScatterGraphic from './ScatterGraphic';

const { headline, lede, nutgraf, scatter } = archieml.load(COPY);

// IMPORTANT: DON'T OVER COMPLICATE SETTINGS. e.g. BY DEFAULT, ADD AXES
// INDICATORS TO FIRST FRAME of connected scatters

const ledeSteps = lede.map(step => {
  if (step.fields) step.fields = step.fields.split(',');
  return step;
});

const scatterSteps = scatter.map(step => {
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
    <ScatterGraphic steps={scatterSteps} />
  </div>
);

export default App;
