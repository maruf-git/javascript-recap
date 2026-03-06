let name = "Book";
console.log(name);
name[0] = 'H'; // Gives no error, but does not work
console.log(name);


// Extracting String Parts
// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)

// string.trim()
// string.replace()
// string.replaceAll()
// string.split() -> convers to an array
// string.repeat(count)

let digits = "0123456789";
let part = digits.slice(3, 6); // negative index is also possible like (-6,-3)
console.log(part);

// string search methods
// String indexOf("value to search", starting index(optional))
// String lastIndexOf("value to search", starting index(optional))
// String search("value to search" or "regular expression to search")
// String match("value to match" or "regular expression to match") -> returns array of indexes
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()
console.log("******************************")
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log("first index: ", index);
let lastIndex = text.lastIndexOf("locate");
console.log("last index: ", lastIndex);