import { add } from "./utils.js";

console.log("This is our main program");
let summation = add(5, 4);
console.log("Summation is : ", summation)

// Modules Can Export
// Variables
// Functions
// Objects
// Classes

// Named Exports
// A named export gives a name to each item.
// Items can be exported individually, or wrapped in { } at the bottom:

// Default Exports
// Default Export exports one main value from a module.
// This gives a clear intent about what the module's primary functionality is.
// If a file is meant to expose one primary function, class, or value, default export makes that explicit:
// export default function calculateSum() { ... }
// Default is Flexible
// Default exports let you import using any name:

// Combining Default + Named
// A module can provide one main function plus some helpers:
// Module File
// export default function parse() { ... }
// export function validate() { ... }
// export function format() { ... }
// Module Script
// import parse, { validate, format } from './parser.js';

// When to Use Default Export?
// When	Why
// One main purpose	Good for modules with a primary function
// Flexible naming	Importers can choose any name
// Cleaner imports	Shorter and simpler import syntax
// Common pattern	Frameworks use it for the main API

// Importing All
// You can import all named exports from a module as a single object using the * syntax.
// Examples
// // Import all named exports from person.js
// import * as person from "./person.js";
// // Import all named exports from math.js
// import * as math from "./math.js";

// Default Import vs Named
// Feature	Default Import	Named Import
// Typical use case	One main feature per module	Multiple features
// Matches export name?	No (you choose)	Yes (must match)
// Can rename freely?	Always	Only with as
// Export count	Only one default export allowed	Multiple exports allowed


// Module Namespace Features
// Feature	Description
// Namespace	A special object containing all exports from a module
// Syntax	import * as name from module
// Purpose	Organize, access, and reference module exports safely
// Read Only	You can access exports but not reassign them
// Live Binding	If an exported value changes in the module, the namespace reflects that change automatically
// Enumerable	Its properties are enumerable and correspond to named exports
// Prototype	The namespace is a plain object with no prototype
// (Object.getPrototypeOf(math) === null).


