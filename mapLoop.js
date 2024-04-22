// //Create a new array where each number is increased by one using .map()
// let arr = [1, 2, 3, 4, 5, 6, 7];



// //Exercise 2

// /*
// Refactor this using map. log the new array to the console.*/

// const numbers = [65, 44, 12, 4];

// function myFunction(num) {
//   return num * 10;
// }

// Create a new array where each number is increased by one using .map()
let arr = [1, 2, 3, 4, 5, 6, 7].map(num => num + 1);

// Exercise 2
const numbers = [65, 44, 12, 4];
const newNumbers = numbers.map(num => num * 10);
console.log(newNumbers);
