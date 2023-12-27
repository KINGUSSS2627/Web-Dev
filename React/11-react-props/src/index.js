import React from 'react';
import ReactDOM from 'react-dom';

// We can pass the value in a simar way as we do in Html here instead of attributed it is called as properties or props which we can simply pass from Custom created element

// This is why attributes like className dont work in custom element since they consider it as a curstom property instead

function Card(props) {
    return (
        <div>
            <h2 className='name'>{props.name}</h2>
            <img src={props.image} alt='img' height={180}></img>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
        );
}

ReactDOM.render(
    <div>
        <h1>My Contacts</h1>
        <Card name="Nature" image ="images/img.jpg" phone="2521152623" email="abc@123"/>
    </div>
    , document.getElementById("root")
);


