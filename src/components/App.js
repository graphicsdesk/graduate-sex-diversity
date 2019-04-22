import React, { Component } from 'react';
import Graphic from './Graphic';

const steps = [
  {
    maxYear: 1994,
    text:
      'In 1994, there were eighty male and eight female graduate students in the mechanical engineering department.',
  },
  {
    maxYear: 2000,
    text:
      'In the next couple of years, the department neared gender parity due to a shrinking male population.',
  },
  {
    maxYear: 2016,
    text:
      'However, for the next decade, the male population would grow at a much faster rate than the female population...',
  },
  {
    maxYear: 2016,
    isLineVisible: true,
    text:
      '...driving Mechanical Engineering away from the gender equality line.',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Graphic steps={steps} />
      </div>
    );
  }
}

export default App;
