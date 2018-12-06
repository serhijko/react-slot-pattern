import React, { Component } from 'react';

import logo from './logo.svg';
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
        <Greeting
          subject={greeting.subject}
          description={greeting.description}
          logo={logo}
        />
      </div>
    );
  }
}

export default App;
