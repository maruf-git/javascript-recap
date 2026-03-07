const person = {
    firstName: "Maruf",
    lastName: "Ahmed",
    age: 24,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName())

// In JavaScript, Objects are King
// If you Understand Objects, you Understand JavaScript.
// In JavaScript, almost "everything" is an object:
// Objects are objects
// Maths are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// RegExp are Objects
// Errors are Objects
// All JavaScript values, except primitives, are objects.