import React, { Component } from 'react';

import './App.css';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    const greeting = 'Welcome to React';
    
    return (
      <div className="App">
        <Greeting greeting={greeting} isShow={this.state.isShow} />

        <button onClick={this.toggleShow} type="button">
          Toggle Show
        </button>
      </div>
    );
  }
}

export default App;
