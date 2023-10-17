// Alert
alert("m1");
window.alert("m1");

// Data types
typeof (datatype);
var myname = "harsh";
var entername = prompt("Enter yout name");
alert(entername);
alert("Hi " + entername + " I am king , " + entername + " owns the world ! ");

//If else
var message = prompt("Enter Message : ");
var len = message.length;
if (len > 50)
    alert("len > 50 ");
else
    alert(len);


// Slicing
var message = prompt("Enter message here : ");
var len = message.length;
if (len < 140) {
    alert("Message is : " + message);
}
else {
    var trimmed = message.slice(0, 140);
    alert("Message trimmed down to : " + trimmed);
}

// better syntax
alert(prompt("Compose tweet :").slice(0, 10));

// Upper and lower case
var name = "Harsh";
alert(name.toUpperCase());
alert(name.toLowerCase());

// Console
console.log("Message push to console");
// Only for developer not for users


function cost1(bottle) {
    var ans = 1.625 * bottle;
    console.log(ans);
}

//dice randomization
//Ramge of random = [0,1)  ,  :. range of 6 * random is [0,6) but we wanted to be [1,6] :. add 1
var num = Math.floor(Math.random() * 6) + 1;

// Control
if (num === 1) {
    alert("Hi");
}
else {
    alert("bye");
}

// Comparators
/*

=== equal to
!== not equal to
> greater
< lessers
>= ge
<= le

*/


// Array
var namee = ["hi", "by", "ni"];
var lenn = namee.length;
var f = namee.includes("hi");
console.log(namee[0]);

var statements;
// LOOP
for (var i = 0; i < 100; i++) {
    statements;
}

// Multi order Function call

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}
function mul(num1, num2) {
    return num1 * num2;
}

calculator(1, 2, add);
calculator(1, 2, mul);


// Object Model
var BellBoi = {
    name: "hi",
    age: 11,
    permit: true,
    lang: ["Eng", "Hindi"],

    pick: function () {
        console.log("picked");
    }
}
console.log(BellBoi.name);
console.log(BellBoi.age);
console.log(BellBoi.permit);
console.log(BellBoi.lang[1]);

function BellBoy(name, age, permit, lang) {
    this.name = name;
    this.age = age;
    this.permit = permit;
    this.lang = lang;
}

var b1 = new BellBoy("h1", 12, 1, ["eng"]);
console.log(b1.name);
console.log(b1.age);
console.log(b1.permit);
console.log(b1.lang[0]);



// timeout
setTimeout(function () { }, 100);
