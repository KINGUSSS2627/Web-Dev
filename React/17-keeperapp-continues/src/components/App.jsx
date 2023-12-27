import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Note from './Note';
import CreateNotes from './NotesCreater';
import notes from "../notes.js";


function App() {
    return (
    <div>
        <Header/>
        {notes.map(CreateNotes)}
        <Footer/>
    </div>
    );
}

export default App;