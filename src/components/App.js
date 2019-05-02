import React from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import LedeGraphic from './LedeGraphic';
import { Header, Paragraph } from './content';

const { headline, lede, nutgraf } = archieml.load(COPY);

// IMPORTANT: DON'T OVER COMPLICATE SETTINGS. e.g. BY DEFAULT, ADD AXES
// INDICATORS TO FIRST FRAME of connected scatters

const ledeSteps = lede.map(step => {
  if (step.fields) step.fields = step.fields.split(',');
  return step;
});

const App = () => (
  <div>
    <Header headline={headline} />
    <LedeGraphic steps={ledeSteps} />
    {nutgraf.map(text => <Paragraph key={text} text={text} />)}
  </div>
);

export default App;
