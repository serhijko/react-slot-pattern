import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    const greeting = 'Welcome to React';
    
    return (
      <div className="App">
        <h1 className="App-header">{greeting}</h1>
      </div>
    );
  }
}

export default App;
