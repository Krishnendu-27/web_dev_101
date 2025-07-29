/*
Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array

*/
function filterNumbers(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
/*
Task 2: Array Reversal

Write a function reverseArray(arr) that reverses the array
*/
const reverseArray = (arr) => {
  let newarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newarr.push(arr[i]);
  }
  return newarr;
};
/*
Task 3: Find Maximum in an Array

Write a function findMax(arr) that returns the largest number in the array
*/
//Math.max(...numbers) → spreads into individual arguments → works correctly.
//Math.max(numbers) → passes the array as one single argument → results in NaN.

const findMax = (arr) => {
  return Math.max(...arr);
};
/*
Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/
// set check that value exit or not in the array
// Array.from This method converts array-like or iterable objects (like a Set) into a real array.

let removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};
/*
Task 5: Flatten a Nested Array

Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/
// so by "Infinity" the flat can done in any depth mens it wont matter how nested it all will flat
let flattenArray = (arr) => {
  return arr.flat(Infinity);
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 52, 5, 9];
let arr1 = [1, [2, 3, 4], 5, 6, [7, [8, 52], 5], 9];
console.log(filterNumbers(arr));
console.log(reverseArray(arr));
console.log(findMax(arr));
console.log(removeDuplicates(arr));
console.log(flattenArray(arr1));
