import React from 'react';
import Title from './Title';
import Description from './Description';

const Greeting = ({
  subject,
  description,
  logo
}) =>
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Title title={`Welcome to ${subject}`} />
    <Description description={description} />
  </div>

export default Greeting;
