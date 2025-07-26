console.log("Start");

// Macrotask
setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

// Microtask
Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

console.log("End");
