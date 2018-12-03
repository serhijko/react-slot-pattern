import React, { Component } from 'react';

import './App.css';
import Greeting from './components/Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting greeting={{ text: 'Welcome to React' }} />
      </div>
    );
  }
}

export default App;
