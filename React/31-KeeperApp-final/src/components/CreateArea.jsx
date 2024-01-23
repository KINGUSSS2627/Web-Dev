import React from "react";

function CreateArea(props) {

  const [note, setNote] = React.useState({
    title:"",
    content: ""
  });

  function handleChange(event){

    const {name, value} = event.target;

    setNote((prevValue) =>{
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.add(note);
    event.preventDefault();
    setNote({title: "", content:""});
  }


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value ={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value = {note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
