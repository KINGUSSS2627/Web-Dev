import React from "react";
import Form from './Form';

var isLoggedin = 0;
var isRegistered = 0;

// function ReanderConditionally() {
//     if(isLoggedin)
//     {
//         return <h1>Hello</h1>
//     }
//     else
//     {
//         return <LoginForm/>
//     }
// }
// We can replace this funciton with inline ternary operator ?:

function App() {
  return (
    <div className="container">
        <Form
            isLoggedin = {isLoggedin}
            isRegistered = {isRegistered}
        />
    </div>
  );
}
// if you dont want to render anything
export default App;
