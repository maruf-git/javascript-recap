// strings are immutable in javascript

// Multiline Strings
// Template Strings allow multiline strings:
// Example:

let text =
    `The quick
brown fox
jumps over
the lazy dog`;
console.log(text)

// Interpolation
// Template Strings allow variables in strings.
// Template strings provide an easy way to interpolate variables in strings.
console.log("************************")
let firstName = "John";
let lastName = "Doe";
let greet = `Welcome ${firstName}, ${lastName}!`;
console.log(greet)

// Expression Substitution
// Template Strings allow interpolation of expressions in strings:
// Example:
console.log("***********************")
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)

// HTML Templates
// Example:
console.log("***********************")
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;
console.log(html)