// the keyword const is a tittle misleading
// it does not define a constant value.
// It defines a constant reference to a value

// Because of this you can NOT:
// Reassign a constant value
// Reassign a constant array
// Reassign a constant object

// But you CAN:
// Change the elements of constant array
// Change the properties of constant object

const cars = ["Saab", "Volvo", "Toyota"];
console.log(cars);
console.log(typeof cars);

cars[0] = "BMW"; // change the element
cars.push("Mahindra"); // add new element

console.log(cars);
console.log(typeof cars);

console.log("*****************************")
const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

console.log(car);
console.log(typeof car);

car.model = "1000"; // change the property
car.engine = "v12"; // add new property
console.log(car);
console.log(typeof car);