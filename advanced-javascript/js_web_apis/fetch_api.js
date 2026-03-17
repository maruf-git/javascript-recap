async function getText() {
    let myObject = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(`myObject: `, myObject)
    console.log(typeof myObject);

    let myText = await myObject.text();
    console.log(myText)
    console.log(typeof myText);
}
const result = await getText();
console.log("result: ", result)
console.log("typeof result: ", typeof result);

async function getData() {
    let myObject = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(`myObject: `, myObject)
    console.log(typeof myObject);

    let myText = await myObject.json();
    console.log(myText)
    console.log(typeof myText);
}

const data = await getData();
console.log("result: ", data)
console.log("typeof result: ", typeof data);
