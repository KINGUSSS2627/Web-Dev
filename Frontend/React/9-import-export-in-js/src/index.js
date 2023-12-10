import React from 'react';
import ReactDOM from 'react-dom';
import pie from './math'
// We can write any name while exporting if we want the default value exported by module else we need to have same name as exported by module

import { doublePi, triplePi } from './math';

// To import everything from a module in form of array of everything we can use

import *as pi from './math';


ReactDOM.render(
  <div>
    <ul>
      <li>{pie}</li>
      <li>{doublePi()}</li>
      {/* () is used since double and triple pi are functions and they need to be activated */}
      <li>{triplePi()}</li>


      <li>{pi.default}</li>
      <li>{pi.doublePi()}</li>
      <li>{pi.triplePi()}</li>
    </ul>
  </div> ,
  document.getElementById("root")
);