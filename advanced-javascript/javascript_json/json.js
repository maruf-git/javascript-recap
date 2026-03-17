// JSON stands for JavaScript Object Notation.
// JSON is a plain text format for storing and transporting data.
// JSON is similar to the syntax for creating JavaScript objects.
// JSON is used to send, receive and store data

// JSON is text only and language independent *


// JSON.parse() ->converts json object into js object

// JSON.stringify() -> converts js object into json object

// json -> javascript object notation
const student = {
    name: "maruf",
    id: "2102027",
    dept: "cse",
    age: 24
}
console.log(student);
console.log(typeof student)

// convert it to json string
let converted = JSON.stringify(student);
console.log(converted);
console.log(typeof converted);

const arr = [5, 6, 7]
const conArr = JSON.stringify(arr);
console.log(conArr)
console.log(typeof conArr)

const result = 50
const conResult = JSON.stringify(result)
console.log(conResult)
console.log(typeof conResult)

let myObj = { "name": "John", "age": 30, "car": null };
console.log(myObj)
console.log(typeof myObj)