import React from "react";
var List = [];
function App() {

  const [click, setClick] = React.useState(false);

  function handleChange(event){
    click ? List.push(event.target.value) : 0;
    setClick(false);
    console.log(List)
  }

  function handleClick(){
    setClick(true);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
