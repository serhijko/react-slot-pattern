import React from 'react';
import Title from './Title';
import Description from './Description';

const Greeting = ({ subject, description }) =>
  <div>
    <Title title={`Welcome to ${subject}`} />
    <Description description={description} />
  </div>

export default Greeting;
