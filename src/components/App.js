import React, { Component } from 'react';
import Graphic from './Graphic';
import { Header } from './content';

const copy = {
  headline:
    'Gender representation among graduate students in science and engineering',
  graphic: [
    {
      maxYear: 1994,
      showAxesIndicators: true,
      text:
        'In 1994, there were six female and eighty three male graduate students in the mechanical engineering department.',
    },
    {
      maxYear: 1994,
      showGuides: [0.25, 0.5, 0.75],
      text: '6.7% of the department was female.',
    },
    {
      maxYear: 2000,
      showGuides: [0.25, 0.5, 0.75],
      text:
        'In the next couple of years, the department neared gender parity due to a shrinking male population.',
    },
    {
      maxYear: 2016,
      showGuides: [0.25, 0.5, 0.75],
      text:
        'However, during the next decade, the male population would grow at a much faster rate than the female population...',
    },
    {
      maxYear: 2016,
      showLine: true,
      showGuides: [0.5],
      text:
        '...driving Mechanical Engineering away from the gender equality line.',
    },
  ],
};

class App extends Component {
  render() {
    return (
      <div>
        <Header headline={copy.headline} />
        <Graphic steps={copy.graphic} />
      </div>
    );
  }
}

export default App;
