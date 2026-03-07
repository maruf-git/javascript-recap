// returning array (also an object)
function check() {
    console.log("Checked");

    return [1, 2, 3, 4, 5];
}

let values = check();
console.log(values);
console.log("type: ", typeof (values))
console.log(values[2])

// returning object 
function greet() {
    console.log("greet is called");

    return { morning: "good morning", evening: "good evening", night: "good night" }
}

let hello = greet();
console.log(hello);
console.log("type of: ", typeof hello);
console.log(hello.morning);

let { evening } = greet();
console.log(evening);