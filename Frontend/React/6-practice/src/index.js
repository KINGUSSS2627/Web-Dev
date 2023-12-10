// eslint 6.0
import React from 'react';
import ReactDOM from 'react-dom';

var customStyle = {
  color:""
}

var date = new Date();
var hour = date.getHours();
var greeting = "";

if(hour >= 0 && hour <=12)
{
  customStyle.color  = "red";
  greeting = "Good Morning";
}
else if(hour > 12 && hour <=18)
{
  customStyle.color = "green";
  greeting = "Good Afternoon";
}
else
{
  customStyle.color = "blue";
  greeting = "Good Evening";
}

ReactDOM.render(

  <div>
    <h1 className='heading' id='wish' style={customStyle}>{greeting}</h1>
  </div>,

  document.getElementById("root")
);