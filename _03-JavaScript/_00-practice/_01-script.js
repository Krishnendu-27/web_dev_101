//Total sum of a array

let arr = [1, 5, 3, 4, 5, 6, 7, 8, 9, 10];

function sumofArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// console.log(sumofArr(arr));

// #################################################### array ####################################

// 1. Shopping Cart Total
// Scenario: You have a list of prices in a shopping cart.
// Task: Calculate the total amount to be paid.

const prices = [10, 20, 15, 5];
// code here
function totalprice(ammount) {
  let totalcost = 0;
  for (let i = 0; i < ammount.length; i++) {
    totalcost = totalcost + ammount[i];
  }
  return totalcost;
}
// console.log(totalprice(prices));

// 2. Email List Extractor
// Scenario: You have an array of user objects with name and email.
// Task: Extract just the emails into a new array.

const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
];
// code here

function emailExtract(input, field) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i][field]);
  }
  return output;
}
// console.log(emailExtract(users , "email"));

// 2. Find Maximum Number
// Scenario: Given an array of numbers.
// Task: Find the largest number in the array.
let numbering = [4, 9, 2, 7, 12, 1];
// code here

function maxnum(...arr) {
  let maxx = Math.max(...arr);
  return maxx;
}
// console.log(maxnum(...numbering));

// 3. Remove Duplicates
// Scenario: Given an array with duplicate items.
// Task: Return a new array with only unique items.
const items = [1, 2, 2, 3, 4, 4, 5];
// code here
// console.log(items.values);

// 4. Filter Even Numbers
// Scenario: From a list of numbers.
// Task: Return only even numbers.
const nums = [3, 4, 7, 8, 10, 11];
// code here
function evens(numbers) {
  let evennum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evennum.push(numbers[i]);
    }
  }
  return evennum;
}
// console.log(evens(nums));

// 5. Reverse Array
// Scenario: You have an array.
// Task: Reverse the order of elements.
const values = [1, 2, 3, 4, 5];
// code here
function reversearr(arr) {
  let revarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revarr.push(arr[i]);
  }
  return revarr;
}
// console.log(reversearr(values));

// 6. Merge Two Arrays
// Scenario: You have two arrays.
// Task: Merge them into one array.
const arr1 = [1, 2];
const arr2 = [3, 4];
// code here
function margearr(arr1, arr2) {
  let newarr = [];
  return arr1.concat(arr2);
}
// console.log(margearr(arr1, arr2));

// 7. Sum of Positive Numbers
// Scenario: An array contains both positive and negative numbers.
// Task: Return the sum of only the positive ones.
const nums2 = [-1, 3, 5, -2, 7];
// code here

function positivenum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      sum = sum + number[i];
    }
  }
  return sum;
}
console.log(positivenum(nums2));

// 8. Get Last N Elements
// Scenario: Get last 3 elements of an array.
// Task: Write a function to return them.
const data = [11, 22, 33, 44, 55, 66];

function lastel(data, n = 3) {
  return data.slice(-n);
}

console.log(lastel(data));

// 9. Count Occurrences
// Scenario: Count how many times a number appears in an array.
const countArr = [1, 2, 2, 3, 2, 4];
// Task: Count how many times 2 appears.
// code here

// 10. Flatten Nested Arrays
// Scenario: You have an array of arrays.
// Task: Flatten it into a single array.
const nested = [[1, 2], [3, 4], [5]];
// code here

// #################################################LOOP####################################################
// 1. Print Numbers 1 to 10
// Task: Use a loop to print numbers 1 to 10.
// code here

// 2. Sum of 1 to N
// Task: Given n, calculate the sum from 1 to n.
const n = 5;
// code here

// 3. Factorial of a Number
// Task: Calculate factorial of a given number.
const num3 = 4;
// code here

// 4. Multiplication Table
// Task: Print table of a given number (up to 10).
const base = 7;
// code here

// 5. Count Digits in Number
// Task: Count how many digits a number has.
const number = 12345;
// code here

// 6. Reverse a String
// Task: Reverse the given string using a loop.
const str = "hello";
// code here

// 7. Find First Even in Array
// Task: Use loop to find the first even number.
const array = [1, 3, 7, 8, 10];
// code here

// 8. Calculate Average
// Task: Find the average of values in array.
const scores = [80, 90, 100];
// code here

// 9. Count Vowels
// Task: Count number of vowels in a string.
const inputStr = "JavaScript";
// code here

// 10. Print Fibonacci Series
// Task: Print first N Fibonacci numbers.
const count = 7;
// code here

// ##############################################Conditional ########################################################3
// 1. Check Voting Eligibility
// Scenario: Given an age.
// Task: Check if the person is eligible to vote (18+).
const age = 20;
// code here

// 2. Grade Checker
// Scenario: Given marks.
// Task: Print grade (A/B/C/Fail) based on score.
const marks = 72;
// code here

// 3. Even or Odd
// Scenario: Given a number.
// Task: Check if it's even or odd.
const num = 11;
// code here

// 4. Largest of Three Numbers
// Scenario: You are given 3 numbers.
// Task: Find the largest one.
const a = 10,
  b = 25,
  c = 15;
// code here

// 5. Number Sign Checker
// Scenario: Given a number.
// Task: Check if it's positive, negative or zero.
const nt = -5;
// code here

// 6. Discount Calculator
// Scenario: Given a price and membership status.
// Task: Apply 10% discount if user is a member.
const price = 100;
const isMember = true;
// code here

// 7. Leap Year Checker
// Scenario: Given a year.
// Task: Check if it’s a leap year.
const year = 2024;
// code here

// 8. Traffic Light Logic
// Scenario: Traffic light color.
// Task: Print action (Stop/Slow/Go).
const light = "yellow";
// code here

// 9. Divisible by 3 and 5
// Scenario: Given a number.
// Task: Print "FizzBuzz" if divisible by both, else Fizz or Buzz.
const n2 = 15;
// code here

// 10. Password Strength Checker
// Scenario: Given a password string.
// Task: Check if password is strong (length >= 8 and includes a number).
const password = "abc12345";
// code here
