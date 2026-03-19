// javascript strings are immutable
// "use strict"

let country = "my country in Bangladesh";
console.log(country)

// length property
console.log(`length of the string is : ${country.length}`)


// charAt() method
console.log(`character at 5 index is: ${country.charAt(5)}`)
console.log(`character at 5 index is: ${country[5]}`)

// chancing of any character is not possible as it is immutable
console.log('chaning index 5 character u to U: ');
country[5] = 'U'
console.log("Silently ignores U as string is immutable. it will give error if we add 'use strict' at the top")
console.log(country)


// string.at() is same as string.charAt() but it allows negative character as index
console.log(`using string.at() with negative index -2: ${country.at(-2)}`)


// String toUpperCase()
// String toLowerCase()


// string.slice() accepts negative index also
console.log(`Slice out a portion of a string from position 3 to position 10: ${country.slice(3, 10)}`)


// string.trim() removes white spaces
// string.split() splits the string and returns an array of strings


// String Search Methods
// string.includes()
// string.startsWith()
// string.endsWith()
// string.indexOf()
