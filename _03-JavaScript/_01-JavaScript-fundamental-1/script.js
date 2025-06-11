// We can open Chrome DevTools by inspecting the page and selecting Console, or pressing Ctrl+Shift+J.
// alert only works in the browser.
// We can do math in the console, e.g., 45 + 55.
alert("halo"); 

// To print output in a JS file, we use console.log().
console.log("namsate ji");

// To link a JavaScript file with HTML, use:
// <script src="javascript-file.js"></script>
// It is usually linked just before the closing </body> tag because it:
//   • Avoids blocking HTML rendering
//   • Improves page load performance
console.log("krish");
console.log(55 * 66 - 88 + 6 + 5);

// We store values in variables so we can reuse them without forgetting.
let name = "krish";
console.log(name);

// We can name a variable in camelCase.
let firstPersonName = "krish G";
// We can also use underscores.
let first_person_name = "TOP G";

// Variable names cannot start with a number.
// let 5lop = "koll"; // not possible

// Variables can only contain letters, numbers, underscores, or dollar signs.

// name is a reserved keyword, but it can still be used as a variable name.

// Variables should not start with an uppercase letter; uppercase names are typically used for constants.
let PI = 3.1415;

// Variable names should be meaningful so they are understandable.
// 'typeof' shows the type of a value.
let halo = true;
console.log(typeof halo);

// Examples of 'typeof':
console.log(typeof "halo");
console.log(typeof 52);
console.log(typeof true);

// Variables declared with 'let' can be reassigned multiple times; this is called dynamic typing.
halo = "shape of you";
console.log(halo);

// When we create a variable without assigning a value, it is 'undefined'.
let num;
console.log(num);
console.log(typeof num);

// null is a special value indicating no value.
let number = null;
console.log(number); // null
console.log(typeof number); // object (this is considered a quirk/bug in JavaScript)

// ################### let, var, const ################################################################

/*

  More details:
  https://www.geeksforgeeks.org/javascript/difference-between-var-let-and-const-keywords-in-javascript/
*/

let age = 30;
age = 52; // We updated the 'age' variable.

const birthdate = 2200; 
// This value should not change, so we use 'const'. Constants cannot be declared without initialization.

// 'let' creates block-scoped variables.
// 'var' creates function-scoped variables.

// ################### Operators ################################################################

// Operators allow us to transfer or combine values. There are many types: arithmetic, logical, comparison, etc.
