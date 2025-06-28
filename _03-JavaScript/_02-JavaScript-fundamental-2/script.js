"use strict";
/*
Strict mode in JavaScript is a feature introduced in ECMAScript 5 that allows developers to opt into a restricted variant of JavaScript. This mode enforces stricter parsing and error handling, helping to prevent common coding mistakes and improve code quality, security, and maintainability.

its forbid us to do some thing thing in JS & its show bug that normal Js ignore
its forbid us to use reserve word like private interface 
*/
let driverlicence = false;

let driveingtest = true;

if (driveingtest === true) driverlicence = true;

if (driverlicence === true) console.log("I can drive:D");

// its wun without strict mode but got error in use strict
// let private = "audio of Bugati";
// console.log(private);

//                                                                 FUNCTION
// so normal function
function subof2(num1, num2) {
  return num1 - num2;
}
console.log(subof2(15, 5));

// ananymus function
// here the varible name use as a function name. its also know as exprestion
const multiof2 = function (num1, num2) {
  return num1 * num2;
};
console.log(multiof2(15, 5));

// we can acess the function declaration (normal function) before initialize

console.log(sumof3(10, 8, 9));

function sumof3(num1, num2, num3) {
  return num1 + num2 + num3;
}

// we cant acess the function initialization before called

const evens = function (number) {
  if (number % 2 === 0) {
    console.log("even");
  }
};

console.log(evens(8));

// arrow function

const age = (birthyear) => 2025 - birthyear;

console.log(age(2006));

// calculate reteirment age

// const reteirmentAgeCalculator = (birthyear) => 65 - (2025 - birthyear);

// or

const reteirmentAgeCalculator = (birthyear) => {
  let age = 2025 - birthyear;
  let retirmentage = 65 - age;
  return retirmentage;
};
console.log(reteirmentAgeCalculator(2006));

// call another fucntion in a function

// example area of a quadrilateral  "Area = 1/2 * diagonal * (height1 + height2)"

function hight(height1, height2) {
  return height1 + height2;
}

function quadrilateral(diagonal, height1, height2) {
  let area = (1 / 2) * diagonal * hight(height1, height2);
  return area;
}

console.log(quadrilateral(8, 10, 20));

//                                                                       Object
// we cant give name each value in array and its hard to use in data base to solve that probelm we use obbject we store value in object in keyvalue pare so its easy to note and acess

// exmaple

let student1 = {
  firstname: "ram ",
  lastname: "das",
  age: 50,
  class: "3rdsem",
  gmail: "ram123@gmail.com",
};
// every key called property mens its hold 4 property
console.log(student1);
// we can extract information by . and []

console.log(student1.firstname);
console.log(student1["age"]);

let studeentDetails = student1["firstname"];
console.log(studeentDetails + " its the name of student 1");

let namekey = "name";

// there a anothre way doing it
console.log(student1["first" + namekey]);
console.log(student1["last" + namekey]);
// we can do this 
console.log(student1["last" + namekey] + student1["first" + namekey]);
// or this (its much prefer in industry)
console.log(`${student1["last" + namekey]} ${student1["first" + namekey]}`);

// when we first need to compute property name then we use braket and others time use .
