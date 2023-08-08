// To select element by tag name
document.getElementsByTagName("li");
// This will return an array containing all li's
// To access it use same techniqueas of array


// To select element by class
document.getElementsByClassName("btn");
// This will return an array containing all btn's
// To access it use same techniqueas of array



// To select element by Id
document.getElementById("id");
// This will return a element containing id


document.querySelector("li a");
document.querySelectorAll("li.list");


// changing css on the go using js
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
// Alternate add and remove
document.querySelector("button").classList.toggle("invisible");