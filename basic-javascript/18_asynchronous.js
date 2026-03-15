// asynchronous programming
// Why Async Code
// Some tasks take time to finish (network requests, timers, user input).
// To stay responsive, JavaScript can use async programming.
// Asynchronous flow refers to how JavaScript allows certain operations to run in the background and let their results be handled when they are ready.
// If JavaScript waited for these tasks, the page would freeze.
// Asych code lets the rest of the program continue to run.


console.log("A") // 0.01
console.log("B")// 0.1

setTimeout(function () {
    console.log("C")
}, 5000) // 2s
console.log("D") // 1s

// let result;
function printE() {
    //   result = 5;
    console.log("E")
}
setTimeout(printE, 2000);

console.log("F")

