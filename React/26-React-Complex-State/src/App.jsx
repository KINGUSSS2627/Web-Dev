import React from "react";

// function App() {

//   const [fname, setFname] = React.useState("");
//   const [lname, setLname] = React.useState("");

//   function changeFname(event){
//     setFname(event.target.value);
//   }

//   function changeLname(event){
//     setLname(event.target.value);
//   }


//   return (
//     <div className="container">
//       <h1>Hello {fname} {lname}</h1>
//       <form>
//         <input onChange={changeFname} name="fName" placeholder="First Name" />
//         <input onChange={changeLname} name="lName" placeholder="Last Name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

function App() {

  const [fullname, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  function changeName(event){
    
    const {value, name} = event.target

    // if(inputName === 'fName')
    // {
    //   setFullName({fName : newVal});
    // }
    // if(inputName === 'lName')
    // {
    //   setFullName({lName : newVal});
    // }


    // Above if causes an error on writing in one block other clears up to solve this we can do as below, in the methode to update the val we can access prev value using param prevValue


    // Dont use event.target.something inside setFunctions it will cause an error
    setFullName(prevValue => {
      if(name === 'fName'){
        return{
          fName: value,
          lName: prevValue.lName
        }
      }
      else if(name ==='lName'){
        return{
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }



  return (
    <div className="container">
      <h1>Hello {fullname.fName} {fullname.lName}</h1>
      <form>

        <input onChange={changeName} name="fName" placeholder="First Name" 
          value={fullname.fName}
          />

        <input onChange={changeName} name="lName" placeholder="Last Name"  
          value ={fullname.lName}
          />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
