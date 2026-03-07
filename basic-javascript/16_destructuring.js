// Destructuring Assignment Syntax
// The destructuring assignment syntax can unpack objects into variables:

const person = {
    firstName: "maruf",
    lastName: "ahmed",
    age: 24
}

// destructuring
let { firstName, lastName } = person;
console.log(firstName, lastName);

// Object Property Alias
let { age: personAge } = person;
console.log(personAge);


// String Destructuring
// One use for destructuring is unpacking string characters.

// Example
// Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
console.log(a1, a2, a3);

// Array Destructuring
// We can pick up array variables into our own variables:

// Example
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

// The Rest Property
// You can end a destructuring syntax with a rest property.

// This syntax will store all remaining values into a new array:

// Example
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a, b, ...rest] = numbers;
console.log(a, b);
console.log(rest);


// Destructuring Maps
// Example
// Create a Map
const fruit = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Destructuring
let text = "";
for (const [key, value] of fruit) {
    text += key + " is " + value;
}
console.log(text);


// Swapping JavaScript Variables
// You can swap the values of two variables using a destructuring assignment:

// Example
let hi = "John";
let hello = "Doe";

// Destructuring
[hello, hi] = [hi, hello];
console.log(hi, hello)