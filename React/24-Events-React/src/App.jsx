import React from "react";

function App() {

  const [headingText, setHeadingText] = React.useState("Hello");

  const [isMouseOver, setMouseOver] = React.useState(false);

  function handleClick(){
    console.log("Clicked");
    setHeadingText("Submitted");
  }

  function handleMouseOver(){
    console.log("MouseOver");
    setMouseOver(true);
  }

  function handleMouseOut(){
    console.log("MouseOut");
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor :  isMouseOver ? "black" : "white"}}>Submit</button>
    </div>
  );
}

export default App;
