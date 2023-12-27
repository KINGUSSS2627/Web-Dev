import React from "react";
import emojipedia from '../emojipedia.js';
import CreateEntry  from "./CreateEntry.jsx";



function App() {
  return (
    <div>
      <h1> <span>emojipedia</span> </h1>
      <dl>
      {emojipedia.map(CreateEntry)}
      </dl>
    </div>
  );
}

export default App;
