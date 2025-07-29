/* Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
*/
// is integer took a number and see it integer or not
function stringToNumber(a) {
  let b = Number(a);
  if (Number.isInteger(b)) {
    return b;
  } else {
    return "Not a number";
  }
}
let a = "52";
console.log(typeof a);
console.log(typeof stringToNumber(a));

/*
Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
*/
function flipBoolean(a) {
  if (a == true || a == 1) {
    return false;
  } else if (a == false || a == 0) {
    return true;
  } else {
    return "enter bollian";
  }
}
let c = 1;
console.log(flipBoolean(c));

/*
Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

*/
function whatAmI(a) {
  return `I am a ${typeof a}`;
}
console.log(whatAmI(true));

/*
Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/
function isItTruthy(a) {
  if (a) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}
console.log(isItTruthy(5))