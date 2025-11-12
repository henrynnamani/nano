/**
 * Logical Operators
 *
 * Control structures - if, else if, else, switch
 * Loop - for(for..in, for..of), while, do...while
 *
 * Functions - declaration, definition, (recursion)
 */

/**
 * Example - &&, || and !
 *
 * Real analogy - restaurant,
 *
 * bread || chickenPie -> Pay Vendor
 *
 * RULES (AND)
 * True && True = True
 * False && True = False
 * True && False = False
 * False && False = False
 *
 * RULES (OR)
 * True || True = True
 * True || False = True
 * False || True = True
 * False || False = False
 *
 * NOT(!)
 * !True = False
 * !False = True
 *
 * NOTE: Precedence rule in Logical Operator
 * ()
 * NOT
 * AND
 * OR
 */

/**
 * if(condition) {
 *  if_statement
 * } else if(condition) {
 *  elseif_statement
 * } else {
 *  else_statement
 * }
 */

// const vendorInLocation = false;
// const isVendorMale = true;
// const vendorCanDeliverToLocation = true;

// // isVendorMale = false
// if (vendorInLocation || isVendorMale == false) {
//   console.log("Pay vendor within location");
// } else if (!vendorCanDeliverToLocation || !isVendorMale) {
//   console.log("Pay vendor to deliver to location");
// } else {
//   console.log("Look for another vendor");
// }

/**
 * Write an if...else if...else
 *
 * isOfficeOpen = false
 * isTutorPresent = false
 *
 * - Stay back home
 *
 * - Come to Nanocode
 */

// Determine if a number is even or odd

/**
 * 3 % 2 = 1
 * 4 % 2 = 0
 * 5 % 2 = 1
 * 6 % 2 = 0
 * 7 % 2 = 1
 * 8 % 2 = 0
 */

// const number = 17;

// if(number ...) {
//     console.log("Event");
// } else {
// }

/**
 * loop
 *
 * initializer - our starting point(counter) = 1
 * condition - counter < 1000
 * increment - ++counter
 *
 * for(initializer;condition;increment|decrement) {
 *  statement;
 * }
 */

for (let counter = 100; counter >= 50; --counter) {
  if (counter % 2 == 0) {
    console.log(counter);
  }
}

// 50 - 100
