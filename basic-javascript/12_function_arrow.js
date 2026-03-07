// When to Use Arrow Functions
// For short functions
// For callbacks and array methods
// When you do not need your own this
// When Not to Use Arrow Functions
// As object methods
// When you need your own this
// When using function declarations


const sum = (a, b) => { return a + b };
console.log(sum(4, 5));

const sub = (a, b) => a - b;
console.log(sub(4, 5));

const greet = name => "good morning " + name;
console.log(greet("maruf"))