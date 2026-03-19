// label

console.log("label with continue")
let counter = 1;
loop1: for (let i = 0; i < 5; i++) {
    loop2: for (let j = 0; j < 5; j++) {
        if (j == 3) continue loop1;
        console.log(`${counter}: maruf`)
        counter++;
    }
}
console.log("***********************")

console.log("label with break:")
let count = 0;
loop3: for (let i = 0; i < 5; i++) {
    loop4: for (let j = 0; j < 5; j++) {
        if (j == 3) break loop3;
        console.log(`${count}: maruf`)
        counter++;
    }
}

// JavaScript Is Single-Threaded
// JavaScript runs on a single thread.
// It can only do one thing at a time.
// Every task has to wait for the previous one to finish.
// This can freeze an application during slow operations (like file requests).