import React from 'react';
import { render } from 'react-dom';
import Lorem from './Lorem';

render(
  <div>
    <Lorem times={2} color={'#FFAADD'} fontSize={'medium'} />
    <Lorem color={'blue'} fontSize={30} />
    <Lorem color={'rgb(154,67,123)'} fontSize={'large'} />
  </div>,
  document.getElementById('root')
);
