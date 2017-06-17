import React from 'react';
import { render } from 'react-dom';
import Lorem from './Lorem';

render(
  <div>
    <Lorem />
    <Lorem reps={{ times: 4, lineBreak: true }} color={'yellow'} fontSize={'medium'} />
    <Lorem color={'blue'} fontSize={30} />
    <Lorem color={'rgb(154,67,123)'} fontSize={'large'} />
  </div>,
  document.getElementById('root')
);
