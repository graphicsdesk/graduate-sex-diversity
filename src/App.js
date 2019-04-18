import React, { Component } from 'react';
import Graphic from './Graphic';

class App extends Component {
  render() {
    return (
      <div>
        <Graphic steps={[1, 2, 3]} />
      </div>
    );
  }
}

export default App;
