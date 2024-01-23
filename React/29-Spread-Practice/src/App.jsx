import React from "react";
function App() {
  
  const [inputText, setinputText] = React.useState("");
  const [items, addItems] = React.useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setinputText(newValue);
  }

  function handleAdd(){
    addItems( (prevItem) => {
      return [...prevItem, inputText]
    })
    setinputText("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
