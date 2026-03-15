// A Promise acts as a placeholder for a value that will be available at some point in the future, allowing you to handle asynchronous code in a cleaner way than traditional callbacks.
// Promise States
// A promise can be in one of three exclusive states:
// Pending:
// The initial state; the operation has started but is neither fulfilled nor rejected.
// Fulfilled:
// The operation completed successfully, and a value is available.
// Rejected:
// The operation failed, and a reason (error) is available.
// A promise is considered settled if it is fulfilled or rejected (not pending).


let eidGiftPromise = new Promise(function (resolve, reject) {
    // code that may take some time(async)
    let ok = true;
    if (ok) resolve("OK");
    else
        reject("FAILED")
});
// console.log("promise result: ", eidGiftPromise);
console.log(eidGiftPromise)
console.log(typeof eidGiftPromise)

eidGiftPromise.then(
    function (OK) {
        console.log("Thank you so much")
    },
    function (FAILED) {
        console.log("Its ok. We all are together. Its already a gift for me")
    }
);

// console.log("promise result: ", eidGiftPromise);

console.log("************")
let promise = Promise.resolve("OKK");
console.log(promise)


async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    return data;
}
// console.log(response)
const data = await getData();
console.log(data);