import React from "react";

function App() {

  const [detail, setDetail] = React.useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateDetail(event){
    const {value, name} = event.target;

    setDetail((prevValue)=>{
      return {
        ...prevValue,
        // Below dont access above name it create a new property
        // name: value
        // To solve this we have to use array syntax fro the state name
        [name]: value
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {detail.fName} {detail.lName}</h1>
      <p>{detail.email}</p>
      <form>

        <input onChange={updateDetail} name="fName" placeholder="First Name"/>
        <input onChange={updateDetail}  name="lName" placeholder="Last Name"/>
        <input onChange={updateDetail}  name="email" placeholder="Email"/>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
