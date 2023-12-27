import React from 'react';

function Heading()
{
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

  return <h1 className='heading' id='wish' style={customStyle}>{greeting}</h1>;
}

export default Heading;