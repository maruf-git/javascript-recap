// function expressions
// A Function expression is a function stored in a variable
// The variable name can be used to call the function

// Arrow Function
// Arrow Function is a short syntax for function expressions
// we can skip the function keyword
// can skip the return keyword
// can skip the curly brackets

// JavaScript Callbacks
// A javascript callback is a function passed as an argument to another function
// which is then executed (or "called back") at a later point in time to complete a specific task.

// Self Invoked functions
// slef starting functions

// Javascript closures
// functions that remember their scope

// Function References

// function functionName(parameters){
//     // code to execute

//     return (optional)
// }

function greet(name) {
    console.log("Hello " + name);
    // return value is undefined
}
console.log("type of greet: ", typeof greet)

const value = greet(("maruf"));
console.log("return value is: ", value);


const variable = greet; // refers to the function itself
console.log("variable: ", variable)
console.log("typeof variable:", typeof variable)

const returns = variable("maruf ur rahman")
console.log(returns)