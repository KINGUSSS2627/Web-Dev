import React from "react";  

// function ToDoItem(props){
//     const [click, setClick] = React.useState(false);
//     function handleClick(){
//         setClick((prevValue)=>{return !prevValue});
//     }
//     return <li onClick={handleClick} style={{textDecoration: click ? "line-through" : "none"}}>{props.text}</li>;
// }
function ToDoItem(props){

    // We can also pass a fucntion from app to its child like delete below
    
    // Below way immediate fucntion call take place :. we use to have a fucntion instead of passing directly
    // return <li onClick={props.onChecked(props.id)}>{props.text}</li>;

    return <li onClick={()=>{
        props.onChecked(props.id);
    }}>
    {props.text}</li>;
}

export default ToDoItem;