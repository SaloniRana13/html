// array-example.js

// Define an array
const fruits = ["apple", "banana", "cherry", "date"];

// Access elements
console.log("First fruit:", fruits[0]); // apple

// Add a new element
fruits.push("elderberry");

// Remove the last element
fruits.pop();

// Loop through the array
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});

// Find an element
const hasBanana = fruits.includes("banana");
console.log("Has banana?", hasBanana);
