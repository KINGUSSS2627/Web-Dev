import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// Functions in react has shound have name starting with a capital letter (Pascal Case)
// Function created can now be used as html element and it will return the html code written inside them
// Js components can be written in seprate file with jsx extension
// We need to import react to eacj JSX file created for each component

// Below is inline declaration of a react function or instead we can create a component
// function Heading() {
//   return <h1>My Favorite Subject</h1>;
// }

// Instead of declaring a div in render we create a custom app tag



ReactDOM.render( <App/>, document.getElementById("root"));