// 1. Print Numbers 1 to 10
// Task: Use a loop to print numbers 1 to 10.
// code here
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 2. Sum of 1 to N
// Task: Given n, calculate the sum from 1 to n.
const n = 5;
// code here
for (let i = 1; i <= n; i++) {
  console.log(i);
}
// 3. Factorial of a Number
// Task: Calculate factorial of a given number.
const num3 = 5;
// code here
let fact = 1;
for (let i = 1; i <= num3; i++) {
  fact = fact * i;
}
console.log(fact);

// 4. Multiplication Table
// Task: Print table of a given number (up to 10).
const base = 7;
// code here
for (let i = 1; i <= 10; i++) {
  j = base * i;
  console.log(`7 * ${i} = ${j}`);
}
// 5. Count Digits in Number
// Task: Count how many digits a number has.
let number = 12345;
// code here
let digit_count = 0;
let num = Math.abs(number); //

if (num === 0) {
  digit_count = 1;
} else {
  while (num > 0) {
    num = Math.floor(num / 10);
    digit_count++;
  }
}

console.log(`Number ${number} contains ${digit_count} digits`);

// 6. Reverse a String
// Task: Reverse the given string using a loop.
const str = "hello";
// code here

let newstr = [];
for (let i = str.length - 1; i >= 0; i--) {
  newstr.push(str[i]);
}
console.log(newstr);

// 7. Find First Even in Array
// Task: Use loop to find the first even number.
const array = [1, 3, 7, 8, 10];
// code here
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 == 0) {
    console.log(`${array[index]} is the first even number in ${array}`);
    break;
  } else {
    continue;
  }
}
// 8. Calculate Average
// Task: Find the average of values in array.
const scores = [80, 90, 100];
let avg = 0;
let sum = 0;
// code here
for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i];
  avg = sum / scores.length;
}
console.log(avg);

// 9. Count Vowels
// Task: Count number of vowels in a string.
const inputStr = "JavaScript";
// code here
let vowelsCount = 0;
// for (let i = 0; i < inputStr.length; i++) {
//   //   console.log(inputStr[i]);
//   if (inputStr[i] == "a" || "e" || "i" || "o" || "u") {
//     vowelsCount = vowelsCount + 1;
//   }
// }
let m;
while ((m = 0 < inputStr.length)) {
  if (inputStr[m] == "a" || "e" || "i" || "o" || "u") {
    vowelsCount = vowelsCount + 1;
  }
  inputStr[m]++;
}
console.log(vowelsCount);
// 10. Print Fibonacci Series
// Task: Print first N Fibonacci numbers.
const count = 7;

// code here
// 11. Power of a Number
// Task: Calculate base^exponent using loop.
const baseNum = 2;
const exponent = 4;
// code here

// 12. Check Prime
// Task: Check if a number is prime.
const primeCandidate = 13;
// code here

// 13. Sum of Even Numbers up to N
// Task: Sum all even numbers from 1 to n.
const n2 = 10;
// code here

// 14. Find Max in Array
// Task: Find the largest number in the array.
const nums = [3, 6, 2, 99, 24];
// code here

// 15. Find Index of a Target
// Task: Find the index of target in array (or -1 if not found).
const values = [5, 8, 12, 20];
const target = 12;
// code here

// 16. Count Words in a Sentence
// Task: Count how many words are in the string.
const sentence = "This is a loop practice challenge";
// code here

// 17. Remove Duplicates from Array
// Task: Create a new array with duplicates removed using loop.
const dupArray = [1, 2, 2, 3, 4, 4, 5];
// code here

// 18. Capitalize First Letter of Each Word
// Task: Capitalize each word’s first letter in a sentence.
const text = "javascript loop problems";
// code here

// 19. Palindrome Check
// Task: Check if a string is a palindrome using loop.
const word = "level";
// code here

// 20. GCD of Two Numbers
// Task: Find greatest common divisor using Euclidean algorithm.
const a = 48;
const b = 18;
// code here
// 21. Print All Prime Numbers up to N
// Task: Print all prime numbers from 1 to n.
const limit = 30;
// code here

// 22. Rotate Array to the Right
// Task: Rotate the elements of the array to the right by k steps.
const arr = [1, 2, 3, 4, 5];
const k = 2;
// code here

// 23. Count Frequency of Each Character
// Task: Count how many times each character appears in a string.
const freqStr = "looping";
// code here

// 24. Find Second Largest Number
// Task: Find the second largest number in the array.
const numList = [10, 30, 50, 20, 40];
// code here

// 25. Flatten a Nested Array
// Task: Flatten a 2D array into a 1D array using loops.
const nested = [[1, 2], [3, 4], [5]];
// code here

// 26. Longest Word in a Sentence
// Task: Find the longest word in a sentence.
const msg = "Loops are a powerful tool in JavaScript";
// code here

// 27. Remove All Vowels from String
// Task: Remove vowels from a given string using loop.
const input = "Beautiful day in the neighborhood";
// code here

// 28. Convert to Camel Case
// Task: Convert dash-separated words to camelCase.
const dashString = "convert-this-string";
// code here

// 29. Sum of Digits Until Single Digit
// Task: Keep summing the digits until only one digit remains.
const numberToReduce = 9875;
// code here

// 30. Chunk Array
// Task: Split array into chunks of given size.
const bigArray = [1, 2, 3, 4, 5, 6, 7];
const chunkSize = 3;
// code here
