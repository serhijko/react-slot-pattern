import React, { Component } from 'react';

import './App.css';
import Greeting from './components/Greeting';
import Button from './components/Button';

class App extends Component {
  render() {
    const greeting = 'Welcome to React';
    
    return (
      <div className="App">
        {isShow ? <Greeting greeting={greeting} /> : null}

        <Button />
      </div>
    );
  }
}

export default App;
