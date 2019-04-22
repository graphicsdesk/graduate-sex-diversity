import React, { Component } from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import Graphic from './Graphic';
import { Header } from './content';

const copy = archieml.load(COPY);
const scatterPlots = copy.scatter_plots;

class App extends Component {
  render() {
    return (
      <div>
        <Header headline={copy.headline} />
        {Object.values(scatterPlots).map(steps => {
          steps = steps.map(step => {
            if (step.showGuides)
              step.showGuides = step.showGuides.map(x => +x);
            if (step.maxYear)
              step.maxYear = +step.maxYear;
            return step;
          });
          return <Graphic steps={steps}/>;
        })}
      </div>
    );
  }
}

export default App;
