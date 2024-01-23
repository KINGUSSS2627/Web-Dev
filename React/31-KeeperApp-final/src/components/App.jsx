import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = React.useState([]);

  function AddNote(note){
    setNotes((prevNotes) => {return [...prevNotes, note]})
  }

  function DelNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((note, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea add={AddNote}/>
      {notes.map((note, index)=>{ return <Note id= {index} key ={index} title= {note.title} content = {note.content} del ={DelNote}/>})}
      <Footer />
    </div>
  );
}

export default App;
