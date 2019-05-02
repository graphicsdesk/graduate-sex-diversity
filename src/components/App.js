import React from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import LedeGraphic from './LedeGraphic';
import { Header, Paragraph } from './content';
import { POSSIBLE_GUIDES } from '../constants';

const { headline, lede } = archieml.load(COPY);

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

const nutgraf = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor ut turpis id imperdiet. Quisque pharetra urna sed nunc consectetur, id vestibulum lorem fermentum. In eleifend facilisis rhoncus. Donec ullamcorper tincidunt augue. Sed a ornare purus, id bibendum mauris.',
  'Suspendisse suscipit ipsum dapibus arcu venenatis, eget ultrices purus laoreet. Integer dolor justo, pretium id erat non, feugiat fringilla mauris. Aenean consequat, purus et faucibus luctus, sapien neque tempor nibh, nec lobortis arcu augue a tortor. Sed vulputate convallis tempor.',
];

const App = () => (
  <div>
    <Header headline={headline} />
    <LedeGraphic steps={ledeSteps} />
    {nutgraf.map(text => <Paragraph key={text} text={text} />)}
  </div>
);

export default App;
