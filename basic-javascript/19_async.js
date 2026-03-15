// let result;
// console.log("Start result: ", result);
// setTimeout(() => {
//     result = 10;
// }, 5000)

// console.log("End result: ", result)

// setTimeout(() => {
//     console.log("Now result is: ", result);
// }, 4000)


setInterval(() => {
    let time = new Date()
    console.log(time.toLocaleTimeString())
}, 1000)