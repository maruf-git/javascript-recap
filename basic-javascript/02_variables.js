// variables = data containers

// mordern javascript
// using let
// using const

// older javascript
// using var (not recommended)
// automatically (not recommended)

// A convention among professional programmers is to start a name with underscore for "private" variables.

// Using the $ is not very common in JavaScript, but professional programmers often use it as an alias for the main function in JavaScript libraries.

// When to Use var, let, or const?
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you cannot use const
// 5. Never use var if you can use let or cons

// JavaScript Data Types
// JavaScript variables can hold 8 datatypes, but for now, just think of numbers and strings.


// let
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope


var name = "maruf" // global scope
console.log("first: ", name)
function greet() {
    var name = "rifat" // functional scope
    console.log("Hello ", name);
}

greet();
console.log("last: ", name);
var name = "shifat";
console.log("redeclared name:", name);

// so var has
// global scope
// functional scope
// var does not has block scope

// comparision table
// | Feature            | var       | let     | const   |
// | ------------------ | --------- | ------- | ------- |
// | Scope              | Function  | Block   | Block   |
// | Redeclare          | ✅ Yes     | ❌ No    | ❌ No    |
// | Reassign           | ✅ Yes     | ✅ Yes   | ❌ No    |
// | Hoisted            | ✅ Yes     | ✅ Yes   | ✅ Yes   |
// | Access Before Decl | undefined | ❌ Error | ❌ Error |
// | Bind Global this   | ✅ Yes     | ❌ No    | ❌ No    |


// console.log(a); //output error
// let a = 10;
// ReferenceError: Cannot access 'a' before initialization ❌

// console.log(a); //output undefined and it does not give error
// var a = 10;


// 4️⃣ var কেন "binds this" বলা হয়
// var দিয়ে যদি global variable বানাও তাহলে সেটা global object এর property হয়ে যায়।
// Browser এ global object হচ্ছে: window

// Example:
// var a = 10;
// console.log(window.a);