function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!



(function() {
  console.log("This runs immediately");
})();


const add = function(a, b) {
  return a + b;
};




function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet(); // "Hello, Guest!"
greet("Charlie"); // "Hello, Charlie!"
