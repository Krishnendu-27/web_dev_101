/*
Task:

Perform the following mathematical operations
on the provided variables a and b

Add

Subtract

Multiply

Divide

Increment

Decrement

Reminder

*/
function Add(a, b) {
  return a + b;
}
function Subtract(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}
function Divide(a, b) {
  return a / b;
}
function Increment(a, b) {
  a++;
  b++;
  return a, b;
}
function Decrement(a, b) {
  a--;
  b--;
  return a, b;
}

function Reminder(a, b) {
  return a % b;
}
(a = 5), (b = 30);
console.log(Add(a, b));
console.log(Subtract(a, b));
console.log(Divide(a, b));
console.log(Multiply(a, b));
console.log(Increment(a, b));
console.log(Decrement(a, b));
