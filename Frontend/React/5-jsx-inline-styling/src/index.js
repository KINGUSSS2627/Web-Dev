/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  color:"red",
  fontSize: "20px",
  border: "1px solid blue"
}

ReactDOM.render(<h1 style={styles}>Hi Everyone</h1>, document.getElementById('root'));
// ReactDOM.render(<h1 style = "color : red">Hi Everyone</h1>, document.getElementById('root')); is wrong

// We cant directly use inline css same as html file instead we need to pass a javascript object for the same and that too is passed in {} as in jsx js obj are passed in {}

// In js objects css properties is converted to camle case example : font-size => fontSize

// With inline styling we can update css properties by changing of certion event on the go