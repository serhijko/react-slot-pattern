import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    const greeting = 'Welcome to React';
    
    return <h1 className="App-header">{greeting}</h1>
  }
}

export default Greeting;
