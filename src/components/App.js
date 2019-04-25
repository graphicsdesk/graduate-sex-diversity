import React, { Component } from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import ScatterGraphic from './ScatterGraphic';
import LedeGraphic from './LedeGraphic';
import { Header, Paragraph } from './content';
import { keyToDataName } from '../utils';

const { headline, lede, body, scatters } = archieml.load(COPY);

class App extends Component {
  render() {
    return (
      <div>
        <Header headline={headline} />

        <LedeGraphic steps={lede} />

        {body.map(text => <Paragraph key={text} text={text} />)}

        {Object.keys(scatters).map(key => {
          // Convert strings of numbers to numbers
          const steps = scatters[key].map(step => {
            if (step.showGuides) step.showGuides = step.showGuides.map(x => +x);
            if (step.maxYear) step.maxYear = +step.maxYear;
            return step;
          });
          return (
            <ScatterGraphic
              key={key}
              steps={steps}
              dataName={keyToDataName(key)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
