/**
 * if statements
 * loops - for(for..in, for..of), while, do..while
 * functions
 */

/**
 * syntax for loop
 *
 * for(initialization;condition;increment|decrement) {
 *  statement
 * }
 *  * initialization - let counter = 1;
 *  * condition - counter <= 50
 *  * increment - counter++, --counter
 */

/**
 * 5 - 8
 *
 * 5 * 4 =
 * 5 * 5 =
 * 5 * 6 =
 * ...
 * 5 * 12 =
 */

// for (let counter = 5; counter <= 8; ++counter) {
//   for (let x = 4; x <= 12; ++x) {
//     console.log(`${counter} * ${x} = ${counter * x}`);
//   }
//   console.log("\n");
// }

// const names = ["Joy", "Grace", "Hellen", "Benita", "Mattew", "Claire"];

// // for (let name of names) {
// //   // for...of, single item
// //   console.log(name);
// // }

// for (let index in names) {
//   // returns index, 0, 1, 2, 3, 4
//   console.log(index);
// }

/**
 * initialization
 *
 * while(condition) {
 *  increment|decrement
 * }
 */

let counter = 1;
/**
 * do...while
 *
 *  % - modulus
 * 3 % 2 = 1
 * 4 % 2 = 0
 * 7 % 2 = 1
 */

/**
 * function
 *
 * -
 */

function evenNumbers(start, end) {
  // 1 - 50
  do {
    if (start % 2 == 0) {
      // even number
      console.log(start);
    }
    ++start;
  } while (start <= end);
}

// evenNumbers(1, 50);
evenNumbers(20, 350);
