// Scope = Visibility
// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:
// Global scope
// Function scope
// Block scope


// Automatically Global
// If you assign a value to a variable that has not been declared, it will become a GLOBAL variable.
// This code example will declare a global variable carName, even if the value is assigned inside a function.
// Example

myFunction();

// code here can use carName
console.log(carName);
function myFunction() {
    carName = "Volvo";
}