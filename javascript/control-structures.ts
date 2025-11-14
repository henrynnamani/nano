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

function square(x: number) {
  return x * x;
}

function introduceSelf(name: string, age: number, stateOfOrigin: string) {
  return `My name is ${name}, I am ${age} and will go to ${stateOfOrigin} to celebrate obleee(detty december)`;
}

// console.log(introduceSelf("Chinenye", 19, "Abia"));
// console.log(introduceSelf("Collins", 20, "Enugu"));

// 5! - 5 * 4 * 3 * 2 * 1

function mean(numbers: number[]) {
  //implement
}

let numbers = [3, 6, 9, 10, 2, 4];
/**
 * 1. define a variable, you would use to store the sum (0)
 * 2. loop through the numbers, add those numbers 
 * 3. return sum / numbers.length
 */

// numbers.length
console.log(mean(numbers));
