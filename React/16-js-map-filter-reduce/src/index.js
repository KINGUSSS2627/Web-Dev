var numbers = [3, 56, 2, 48, 5];
// map allows us to traverse the array and alter each element

function double(have) {
  return 2 * have;
}
var newNumbers = numbers.map(double);
console.log(newNumbers);

var newNumber = numbers.map((have) => {
  return 2 * have;
});
console.log(newNumber);


// Map also allows to filters the array that return true
var num =  numbers.filter((have) => {
  return have > 2;
});
console.log(num);


// Map also allows to reduce i.e to aacumulate a value by doing some operation to each element in array

var newNum = numbers.reduce((accumulator, curr) =>{
  return accumulator + curr;
})
console.log(newNum);

// Find methode find the first element that matches in the array
var fin = numbers.find((num) => {
  return num > 10;
});
console.log(fin);

fin = numbers.findIndex((num) => {
  return num > 10;
});
console.log(fin);
