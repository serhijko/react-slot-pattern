import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import User from './components/User';

class App extends Component {
  render() {
    const user = {
      name: 'Serhij Korneluk',
      biography: 'Software Engineer ...',
      avatarUrl: logo,
    };
    
    return <User user={user} />;
  }
}

export default App;
