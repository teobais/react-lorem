import React from 'react';
import { render } from 'react-dom';
import Lorem from './Lorem';

render(
  <div>
    <Lorem times={4} />
  </div>,
  document.getElementById('root')
);
