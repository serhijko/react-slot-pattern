import React, { Component } from 'react';

import './App.css';
import Greeting from './components/Greeting';

class App extends Component {
  render() {
    const greeting = {
      subject: 'React',
      description: 'Your component library for ...',
    };
    
    return (
      <div className="App">
        <Greeting greeting={greeting} />
      </div>
    );
  }
}

export default App;
