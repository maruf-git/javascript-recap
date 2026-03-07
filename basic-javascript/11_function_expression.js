// What is a Function Expression?
// A function expression is a function stored in a variable.

// standard function
function multiply(a, b) {
    return a * b;
}

// function expression
const multi = function (a, b) {
    return a * b;
}

console.log(multiply(5, 10));
console.log(multi(5, 10));


// Anonymous Functions
// Function expressions are commonly used for to create anonymous functions. 
// The function above is actually function without a name
// Function stored in variables do not need names
// The variable name is used to ccall the function

// But Function expressions can also be named
const add = function addition(a, b) {
    return a + b;
}

console.log(add(3, 4));
// console.log(addition(3, 4)); // gives error


// hoisting
// Function declarations can be called before they are defined.
// Function expressions can not be called before they are defined.
// Function declarations are "hoisted" to the top of their scope. This means you can call a function before it is defined in the code:

// example of hoisting
let sum = summation(2, 3);
console.log(sum)
function summation(a, b) {
    return a + b;
}

// hoisting is not supported in function expression
// const sub = subtraction(5, 3);
// console.log(sub);
// const subtraction = function (a, b) {
//     return a, b;
// }

// When to Use Each
// Use function declarations for general-purpose functions
// Use function expressions when assigning functions to variables
// Use function expressions in callbacks and event handlers