// let single = 'Hello';     // single quotes
// let double = "World";     // double quotes
// // let backtick = `Hello, World`; // template literals (backticks)


// // let name = "Alice";
// // let greeting = "Hello, " + name + "!";
// strings-demo.js

// 1. String Declaration
let single = 'Hello';
let double = "World";
let backtick = `Hello, ${double}`;

// 2. Concatenation
let name = "Alice";
let greeting = "Hi, " + name + "!";
let templateGreeting = `Hi, ${name}!`;

// 3. String Methods
let str = "  JavaScript String Demo  ";
console.log("Original:", str);
console.log("Length:", str.length);
console.log("Trimmed:", str.trim());
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Includes 'Script':", str.includes("Script"));
console.log("Index of 'Script':", str.indexOf("Script"));
console.log("Replace 'Java' with 'Type':", str.replace("Java", "Type"));
console.log("Slice (2, 11):", str.slice(2, 11));
console.log("Split by spaces:", str.split(" "));

// 4. Escape Characters
let quote = 'She said, "Hello!"';
let path = "C:\\Program Files\\App";
let multiline = "Line1\nLine2\nLine3";

console.log("Quote:", quote);
console.log("Path:", path);
console.log("Multiline:\n" + multiline);

// 5. Multiline String with Template Literal
let poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you.`;

console.log("Poem:\n" + poem);

// 6. Final Output
console.log("\nSummary:");
console.log({ single, double, backtick, greeting, templateGreeting });
