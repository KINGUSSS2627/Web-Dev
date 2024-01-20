import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// If we create a react app counter on click we can say if we add a var count and onClick we inc it using a fucntion it is not going to work as we need to rerender the react element
// We need to create a hook in a component


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
