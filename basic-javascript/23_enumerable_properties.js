// 🧠 Enumerable Properties মানে কি?

// 👉 Enumerable property মানে হলো:
// যে property গুলো loop (iterate) করা যায়

// মানে:

// for...in

// Object.keys()

// 👉 এগুলো দিয়ে যে property গুলো পাওয়া যায় = enumerable

// 🔥 Example
// const user = {
//     name: "Maruf",
//     age: 22
// };

// for (let key in user) {
//     console.log(key);
// }

// 👉 Output:

// name
// age

// 👉 কারণ:

// name এবং age → enumerable ✅

// ⚙️ Non-enumerable property কী?

// 👉 কিছু property আছে:

// object এর মধ্যে থাকে

// কিন্তু loop করলে দেখা যায় না ❌

// 🔬 Example (important)
// const user = {
//     name: "Maruf"
// };

// Object.defineProperty(user, "age", {
//     value: 22,
//     enumerable: false
// });

// console.log(Object.keys(user));

// 👉 Output:

// ["name"]

// 👉 age আছে, কিন্তু দেখা যাচ্ছে না 😮

// 🧪 Direct access vs Loop
// console.log(user.age); // ✅ 22

// 👉 মানে:

// property আছে

// কিন্তু enumerable না

// 📊 Summary Table
// Property Type	Loop e dekhabe?	Direct access
// Enumerable ✅	Yes	Yes
// Non-enumerable ❌	No	Yes
// 🔥 কোথায় কাজে লাগে?

// 👉 Mostly use হয়:

// library/framework internals

// sensitive/internal property hide করতে

// clean iteration রাখতে

// 🧠 Real Example (built-in)
// const arr = [1, 2, 3];

// console.log(Object.keys(arr));

// 👉 Output:

// ["0", "1", "2"]

// 👉 কিন্তু:

// console.log(arr.length);

// 👉 length আছে, কিন্তু loop এ আসে না
// 👉 কারণ এটা non-enumerable 🔥

// 🚀 Super Important

// 👉 Object.keys() → only enumerable
// 👉 Object.getOwnPropertyNames() → সব property (including non-enumerable)

// console.log(Object.getOwnPropertyNames(arr));

// 👉 Output:

// ["0", "1", "2", "length"]
// 🧠 Simple Definition

// 👉
// Enumerable property = যে property loop / iteration এ পাওয়া যায়

// চাও আমি তোমাকে
// 👉 enumerable + writable + configurable — এই তিনটা একসাথে deep ভাবে (interview level) clear করে দেই? 🔥


