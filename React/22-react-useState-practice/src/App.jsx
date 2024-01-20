import React from 'react';

function App() {

  setInterval(getTime,1000);

  let time = new Date().toLocaleTimeString();
  const [Time, setTime] = React.useState(time);
  
  function getTime(){
    let currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  }

  return <>
        <h1>{Time}</h1>
        <button onClick={getTime}>Time ??</button>
  </>
}

export default App
