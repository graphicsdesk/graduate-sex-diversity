import React, { Component } from 'react';
import Graphic from './Graphic';

const steps = [
  { maxYear: -1 },
  { maxYear: 1994 },
  { maxYear: 2000 },
  { maxYear: 2016 },
]

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
