// Asynchronous Study Path
// Learn Asynchronous JavaScript in the Right Order:

// First: Async Programming
// Then: Async Timeouts
// Then: Async Callbacks
// Then: Async Promises
// Then: Async Await
// Then: Async Fetch
// Then: Async Debugging
// Then: Async Reference

// Asynchronous Code
// Async code allows a program to start a long-running task (like fetching data from a file). and continue with other tasks before the first one finishes.
// Async code prevents the application from freezing, which is critical for user experience.


// Control Flow
// Control Flow is the order in which statements are executed in a program.
// By default, JavaScript runs code from top to bottom and left to right.
// Async programming can change this.

function myDisplayer(value) {
    console.log(value);
}

myDisplayer("A");

setTimeout(function () {
    myDisplayer("B");
}, 1000);

myDisplayer("C");