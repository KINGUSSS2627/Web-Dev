import React from "react";

function Card(props) {
    return (
    <div className="card">
        <div className="top">
            <h1 className="name">{props.name}</h1>
            <img className="circle-img" src={props.image} alt="img"/>
        </div>


        <div className="bottom" >
            <p className="info">{props.tel}</p>
            <p className="info">{props.email}</p>
        </div>

    </div>
    );
}

export default Card;