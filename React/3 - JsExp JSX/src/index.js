/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

const name  = "Harsh";
const lname  = "gupta";

ReactDOM.render(
// The below shown way can only hold a expression of javascript not the statement
// 2nd way is using ejs lint to consider whole as a string
 <div>
      name is {name} {lname}
      <br></br>
      name is {`${name} ${lname}`}
  </div>,
  document.getElementById('root')
);


// const name = "Shreshth Gupta";
// const year = new Date().getFullYear();

// ReactDOM.render(
//   <div>
//     <p>Written by {name}</p>
//     <p>Copyright {year}</p>
//   </div>
// ,document.getElementById("root"))
