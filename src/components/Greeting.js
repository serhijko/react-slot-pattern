import React from 'react';
import Title from './Title';
import Description from './Description';

const Greeting = ({ subject, ...other }) =>
  <div>
    <Title title={`Welcome to ${subject}`} />
    <Description {...other} />
  </div>

export default Greeting;
