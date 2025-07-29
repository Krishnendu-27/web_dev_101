let arr = [2, 3, 4, 5];
let arr1 = [2, 3, -1, 4, -5, 5];
/*
Task 1: Using Array Methods

Write a function squareNumbers(arr) using map() and arrow functions
*/
/*
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.
*/
const squareNumbers = (arr) => {
  return arr * arr;
};
/* OPTIMIZE SOLUTION
let arr = [2, 3, 4, 5];
console.log(arr.map(num => num * num));
*/
/*
Task 2: Custom Filter Function

Create a function filterEvenNumbers(arr) using filter() and arrow functions
*/

console.log(arr.filter((i) => i % 2 == 0));

/*
Task 3: Sum of Positive Numbers

Writea function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
*/
const sumPositiveNumbers = (arr1) => {
  return arr1.filter((i) => i > 0).reduce((acc, num) => acc + num, 0);
};
/*

Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
*/
function getNames(arr) {
  return arr.map((i) => i.name);
}
// so here we do the square in a sunction now we call it by giving  each element of array as a parametter and it give the result
console.log(arr.map(squareNumbers));
console.log(sumPositiveNumbers(arr1));
let names = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" }
]
console.log(getNames(names));

