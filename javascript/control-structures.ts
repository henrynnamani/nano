/**
 * function
 *
 * - normal
 *
 *  function <name> (parameter) {
 *    do_something()
 *  }
 * - arrow function
 */

// function square(x: number) {
//   return x * x;
// }

const square = (x: number) => x * x;

const factorial = (x: number) => {
  let result = 1;

  for (let counter = x; counter >= 1; --counter) {
    result = result * counter;
  }

  return result;
};

console.log(factorial(10));

// function introduceSelf(name: string, stateOfOrigin: string, age: number = 18) {
//   return `My name is ${name}, I am ${age} years old and will go to ${stateOfOrigin} to celebrate obleee(detty december)`;
// }

// console.log(introduceSelf("Chinenye", "Abia", 19));
// console.log(introduceSelf("Collins", "Enugu"));

// 5! - 5 * 4 * 3 * 2 * 1

// function factorial(number: number) {
//   let result = 1;

//   for (let counter = number; counter >= 1; --counter) {
//     result = result * counter;
//   }

//   return result;
// }

// function median() {
//   // ... ellipsis

//   console.log(arguments);

//   // let sum = 0;

//   // for (let number of arguments) {
//   //   sum = sum + number;
//   // }

//   // return sum / 2;
// }

// // function mean(numbers: number[]) {
// //   //implement
// // }

// let numbers = [3, 6, 9, 10, 2, 4];

// /**
//  * 1. define a variable, you would use to store the sum (0)
//  * 2. loop through the numbers, add those numbers
//  * 3. return sum / numbers.length
//  */

// // numbers.length
// console.log(median(3, 6, 9, 10, 2, 4));
