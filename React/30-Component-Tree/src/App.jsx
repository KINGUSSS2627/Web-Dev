import React from "react";
import ToDoItem from "./TodoItem";
import InputArea from "./InputArea";


function App() {
  
  const [items, setItems] = React.useState([]);

  function handleAdd(inputText){
    setItems( (prevItem) => {
      return [...prevItem, inputText]
    })
  }

  function handleDelete(id){
    setItems((prevItems)=>{
      return prevItems.filter(
        (item, index)=>{
          return index !== id;
        }
        )
    })
    console.log(id);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea Add = {handleAdd}/>
      <div>
        <ul>
          {items.map((item, index) =>
           <ToDoItem key={index} id={index} text= {item} onChecked = {handleDelete}/>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
