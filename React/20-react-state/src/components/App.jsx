import React from "react";

// Below is Declaritive
// function App() {
//     var isDone = true;
//     const crossThrough = {textDecoration : "line-through"};

//     return <p style={isDone ? crossThrough : null} >Buy Milk</p>
// }

// Below is imparitive
function Strike() {
    document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
    document.getElementById("root").style.textDecoration = null;
}
function App() {
    var isDone = true;
    const crossThrough = {textDecoration : "line-through"};

    return <div>
        <p style={isDone ? crossThrough : null} >Buy Milk</p>
        <button onClick={Strike}>Change to Strike</button>
    </div>
}

export default App;