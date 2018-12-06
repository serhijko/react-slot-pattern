import React from 'react';
import Title from './Title';
import Description from './Description';

const Greeting = ({ greeting }) =>
  <div>
    <Title title={`Welcome to ${greeting.subject}`} />
    <Description description={greeting.description} />
  </div>

export default Greeting;
