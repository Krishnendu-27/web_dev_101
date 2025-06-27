// We can open Chrome DevTools by inspecting the page and selecting Console, or pressing Ctrl+Shift+J.
// alert only works in the browser.
// We can do math in the console, e.g., 45 + 55.

// alert("halo");

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

// its a example of String - "" , '' , ``
let names = "Raj";

// Number - i) intiger ii) float
let intiger = 0;
let float = 1.5;

// bolean - true & fales
let likesicecream = true;

// null - empthy nothing not 0 but empty
// eg: its a tempreture are not show then its not 0 its empty

let tempreture = null;

// undefine its say "do the work latter the procastinate one"
let entername; // its example of undefine not have the value

// ################### Operators ################################################################

// Operators allow us to transfer or combine values. There are many types: arithmetic, logical, comparison, etc.

// ####################Function#############################
// its like  a workower who do his job when ever its requeirmrnt are met

// function function nsame (parametar ) {
// code writen in here
// }

function sumOfTwoNum(num1, num2) {
  return num1 + num2;
}
// now call the function

console.log(sumOfTwoNum(99, 1));

// ############################# array ###################3

// its hold value in spequence help in organize the data its store diferent data types

let arr1 = ["HTML", "CSS", "JavaScript", "ReactJs"];

// ######################## conditional############################33333
/*
if (condition) {
  
} else {
  
}
*/

// this help use to give the logic to computer
let weather = "rainy";

if (weather === "sunny") {
  console.log("use suncream");
} else if (weather === "rainy") {
  console.log("took umbrela its raning outside");
} else {
  console.log("took jacket its cold");
}

// here use '=' for assign value && use '===' for cheking value its correct or not

let numberofGuest = 4;

let pizzasize;

if (numberofGuest <= 2) {
  pizzasize = "small";
} else if (numberofGuest <= 5 && numberofGuest >= 2) {
  pizzasize = "medium";
} else {
  pizzasize = "large";
}

console.log(pizzasize);

/*
90 - A
80 - B
70 - C
60 >= D
*/

function gradecal(grade) {
  if (grade <= 90 && grade >= 80) {
    console.log(`Number is ${grade} so your grade is A`);
  } else if (grade <= 80 && grade >= 70) {
    console.log(`Number is ${grade} so your grade is B`);
  } else if (grade <= 80 && grade >= 70) {
    console.log(`Number is ${grade} so your grade is C`);
  } else if (grade <= 70 && grade >= 60) {
    console.log(`Number is ${grade} so your grade is D`);
  } else {
    console.log(`Number is ${grade} so your grade is F`);
  }
}
gradecal(75);

// ##################################array#########################################

// there two way to define a array
let animename = ["86", "Death Note", "AOT", "hell Paradise"];
let favanime = new Array("naruto", "highschoolDXD", "one piece");

console.log(animename);
console.log(favanime);

// for lenght
console.log(animename.length);
// for type
console.log(typeof animename);
// for reverse
console.log(animename.reverse());

// we can change any value by index

console.log(favanime[2]);
favanime[2] = "berserk";
console.log(favanime[2]);

// ################################## loops #########################3#######33333

/* 
loop is know as itration
its has 3 step :
1. declare the variable
2. tell how much he will go 
3. increment or decrement 

i++ is same is i = i+1
*/
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
let newgenanime = [
  "black clover",
  "naruto",
  "demon slayer",
  "JJK",
  "One punch Man",
];

for (let i = newgenanime.length; i >= 0; i--) {
  console.log(`in the ${i} index the value is ${newgenanime[i]}`);
}
// for (let i = 10; i > 1; i--) {
//   console.log(i);
// }
