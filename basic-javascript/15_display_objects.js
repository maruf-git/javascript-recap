const person = {
    name: "maruf",
    age: 24,
    city: "Dinajpur"
}

console.log(person)
const text = person;
console.log(text);

// using for each loop
let result = "";
for (let x in person) {
    result += person[x] + " ";
}
console.log(result);

// Using Object.values()
// Object.values() creates an array from the property values:
const myArray = Object.values(person);
console.log("object values: ", myArray);

// Using Object.entries()
// Object.entries() makes it simple to use objects in loops:

const fruits = { Bananas: 300, Oranges: 200, Apples: 100 }
let get = "";
for (let [fruit, value] of Object.entries(fruits)) {
    get += fruit + ": " + value + ",";
}
console.log(get)

// Using JSON.stringify()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().
// JSON.stringify() is included in JavaScript and supported in all browsers.

let jsonString = JSON.stringify(person);
console.log(jsonString);

// JavaScript Object
//         ↓
// JSON.stringify()
//         ↓
// JSON String
//         ↓
// JSON.parse()
//         ↓
// JavaScript Object