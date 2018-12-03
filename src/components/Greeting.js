import React from 'react';

const Greeting = ({ greeting, isShow }) =>
  isShow ? <h1 className="App-header">{greeting}</h1> : null;

export default Greeting;
