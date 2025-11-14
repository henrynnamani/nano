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
function square(x) {
    return x * x;
}
function introduceSelf(name, age, stateOfOrigin) {
    return "My name is ".concat(name, ", I am ").concat(age, " and will go to ").concat(stateOfOrigin, " to celebrate obleee(detty december)");
}
// console.log(introduceSelf("Chinenye", 19, "Abia"));
// console.log(introduceSelf("Collins", 20, "Enugu"));
// 5! - 5 * 4 * 3 * 2 * 1
function factorial(x) {
    // implement
    var result = 1;
    for (var counter = x; counter >= 1; --counter) {
        result = result * counter;
    }
    return result;
}
console.log(factorial(5));
