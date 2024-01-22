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
      if(name === 'fName'){
        return { fName: value, lName: prevValue.lName, email: prevValue.email };
      }else if(name === 'lName'){
        return { fName: prevValue.fName, lName: value, email: prevValue.email };
      }else{
        return { fName: prevValue.fName, lName: prevValue.lName, email: value};
      }
    })
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
