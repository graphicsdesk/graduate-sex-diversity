import React, { Component } from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import LedeGraphic from './LedeGraphic';
import ScatterGraphic from './ScatterGraphic';
import ScatterRow from './ScatterRow';
import { Header, Paragraph, Subtitle } from './content';

const { headline, lede, nutgraf, scatter, engineering } = archieml.load(COPY);

const scatterSteps = scatter.map(step => {
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

        <LedeGraphic steps={lede} />

        {nutgraf.map(text => <Paragraph key={text} text={text} />)}

        <Subtitle text="A Detailed Look at Engineering" />
        <ScatterGraphic steps={scatterSteps} />

        {engineering.map(({ type, value }) => {
          if (type === 'text') return <Paragraph key={value} text={value} />;
          // assert(value === 'scatters')
          return <ScatterRow fields={value} />;
        })}
      </div>
    );
  }
}

export default App;
