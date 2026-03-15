
// Errors
// Reference Errors
// Type Errors
//  Range Errors
// URI Errors
// Syntax Errors
// Eval Error(deprecated)
// Silent Errors


// How to Handle JavaScript Errors
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// The JavaScript statements try and catch come in pairs:

// try {
//     // block of code to try
// } catch (err) {
//     // block of code to handle errors
// }



// Reference Errors
// A ReferenceError occurs if you use (reference) a variable that does not exist.
// Error Type	Example	Error
// ReferenceError	fname = foo;	foo is not defined
// ReferenceError	let x = y;
// let y = 5;	Cannot access y before initialization


// can not use non existing variable
console.log("Welcome to our website")
try {
    let x = 5;
    x = y + 1;
    console.log(x);
} catch (error) {
    console.log(error.name)
    // console.log(Object.keys(error))
    // for (let key in error) {
    //     console.log(key)
    // }
    console.log(Object.getOwnPropertyNames(error))
    console.log(error.stack)
    console.log(error.name)
    console.log(error.__proto__.name)
}



console.log("javascript type errors:")


// JavaScript Type Errors
// A Type Error occurs when a value is of the wrong type or an operation is invalid on that type.

// Error	Example	Error Message
// TypeError	Anna(5);	Anna is not a function
// Type Error	let num = 1;
// num.toUpperCase();
// num.toUpperCase is not a function

// Anna(5)


// silent errors
let x = 1 / 0;
console.log(x)

let result = "Not Active.";
let isActive = false;

// ❌ Assignment, not comparison
if (isActive = true) {
    let result = "Active!";
    console.log(result)
}
console.log(isActive)


// try catch trhow finally
console.log("***********************")
try {
    let val = 1 / 0;
    console.log(val)
    if (val == Infinity) throw "Not a valid number";
} catch (error) {
    console.log(error)
    console.log(typeof error)
}