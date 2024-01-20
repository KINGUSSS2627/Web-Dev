import React from "react";

function App() {

  const [name, setName] = React.useState("");
  const [headingText, setheading] = React.useState("");


  // The object that call a fucntion on an event also has a param event passed that we can use : event.target 
  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleSubmit(){
    setheading(name);
  }

  function handleSubmitForm(event){
    setheading(name);

    // Forms in html auto refresh in order to make a post req on submit to prevent it we need to  use below line which prevents the form to refresh the page
    event.preventDefault();
  }

  return (
    <div className="container">
      {/* <h1>Hello {headingText}</h1>

       A Must  Remember point is to add the value of with the value or the sate as controlled element value ans value we are targeting generate no conflicts

      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
      <button onClick={handleSubmit}>Submit</button> */}


      {/* Implementing same thing as above in a form */}
      <form onSubmit={handleSubmitForm}>

          <h1>Hello {headingText}</h1>
          <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
          <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
