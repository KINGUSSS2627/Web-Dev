import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import car from './practice.js';

// Arrays can be destructured using [] inside these we need to give names to its element
// In case of objects we use {} ans we have to use same name as of properies of obj in order to give them custom name we have to use name : custom name
// To give default value to a property we can use name = shreshth
// To fetch nested props use =>
// const [cat, dog] = animal
// const {name, sound, feedingRequirements: {food, water}} = cat
// now i can simply use it

const [honda, tesla] = car;

const {speedStats : {topSpeed : hondaTopSpeed}} = honda;
const {speedStats : {topSpeed : teslaTopSpeed}} = tesla;
const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Color</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>  
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </div>
  </React.StrictMode>,
)


