import React, { Component } from 'react';

import './App.css';
import Greeting from './components/Greeting';
import Button from './components/Button';

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
        {this.state.isShow ? <Greeting greeting={greeting} /> : null}

        <Button onClick={this.toggleShow} />
      </div>
    );
  }
}

export default App;
