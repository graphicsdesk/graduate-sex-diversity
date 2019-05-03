import React from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import { insertHighlighters, processSteps } from '../utils';
import { Header, Paragraph, Subtitle } from './content';
import LedeGraphic from './LedeGraphic';
import ScatterGraphic from './ScatterGraphic';
import CountsGraphs from './charts/CountsGraphs';

const { headline, lede, nutgraf, engineering, computer_sciences } = archieml.load(COPY);

// IMPORTANT: DON'T OVER COMPLICATE SETTINGS. e.g. BY DEFAULT, ADD AXES
// INDICATORS TO FIRST FRAME of connected scatters

const ledeSteps = lede.map(step => {
  if (step.fields) {
    step.fields = step.fields.split(',');
  }
  step.text = insertHighlighters(step.text);
  return step;
});

const App = () => (
  <div>
    <Header headline={headline} />

    <LedeGraphic steps={ledeSteps} />

    {nutgraf.map(text => <Paragraph key={text} text={text} />)}

    {engineering.map(({ type, value }) => {
      if (type === 'title') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return <ScatterGraphic key={value.length} steps={processSteps(value)} />;
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return <CountsGraphs key={value} names={value.split(';').map(s => s.trim())} />;
      }
    })}
    {computer_sciences.map(({ type, value }) => {
      if (type === 'title') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return <ScatterGraphic key={value.length} steps={processSteps(value)} />;
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return <CountsGraphs key={value} names={value.split(';').map(s => s.trim())} />;
      }
    })}
  </div>
);

export default App;
