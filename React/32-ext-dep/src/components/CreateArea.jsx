import React, { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {


  const [isExpanded, setExpanded] =React.useState(false);
  function Expand(){
    setExpanded(true);
  }
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    setExpanded(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
       
        {isExpanded ?  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}

        <textarea
          onClick={Expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />

        
        <Zoom in ={isExpanded}>
            <Fab onClick={submitNote}><AddTaskIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
