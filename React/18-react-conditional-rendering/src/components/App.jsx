import React from "react";
import LoginForm from "./LoginForm";

var isLoggedin = 0;

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
        {isLoggedin ? <h1>Hello</h1> : <LoginForm/>}
    </div>
  );
}
// if you dont want to render anything
export default App;
