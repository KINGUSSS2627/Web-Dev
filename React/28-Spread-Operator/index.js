// Understanding basics of spread operator

const citrus = ["Lime", "Lemon", "Orange"];

// To add complete citrus array at any position in fruits array using ...citrus
const fruits =["Apple", "Banana", ...citrus, "Coconut"];
console.log(fruits);


// Also we can add objects inside other obj using this way

const fullName ={
    fName: "Harsh",
    lName: "Gupta"
}

const user ={
    // If we write below without ... then it becomes a nested object instead of a simple obj
    ...fullName,
    id: 1,
    username:"harsh@gupta"
}

console.log(user);




