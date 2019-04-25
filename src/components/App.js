import React, { Component } from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import LedeGraphic from './LedeGraphic';
import { Header, Paragraph } from './content';

const { headline, lede, body } = archieml.load(COPY);

const ledeSteps = lede.map(step => {
  const { showGuides, maxYear } = step;
  if (showGuides) step.showGuides = showGuides.map(x => +x);
  if (maxYear) step.maxYear = +step.maxYear;
  return step;
});

class App extends Component {
  render() {
    return (
      <div>
        <Header headline={headline} />

        <LedeGraphic steps={ledeSteps} />

        {body.map(text => <Paragraph key={text} text={text} />)}
      </div>
    );
  }
}

export default App;
