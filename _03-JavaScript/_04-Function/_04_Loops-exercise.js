/*
Task 1: Sum of First N Natural Numbers

Write a function sumOfN(n) that returns the sum of the first n natural numbers
*/
let sumOfN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};
/*
Task 2: Multiplication Table

Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
*/
const printMultiplicationTable = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};
/*
Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/
/* OPTIMEZE SOLUTION
function countVowels(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
*/
const countVowels = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      count++;
    }
  }
  return count;
};
console.log(sumOfN(10));
printMultiplicationTable(10);
console.log(countVowels("IndIa"));
