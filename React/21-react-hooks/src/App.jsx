import React from 'react'

function App() {

  // const state = React.useState(0);
  // console.log(state);

  // Below is destructuring of state array , the first thing is initial value followed by a fuction
  const [count, setCount] = React.useState(0);
  
  function inc() {
    setCount(count+1);
  }

  function dec() {
    setCount(count-1);
  }

  return (
    <div className='container'>
        <h1>{count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
export default App;