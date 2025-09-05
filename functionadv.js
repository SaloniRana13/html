//IIFE: Immediately invoked function Expression
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is immediately executed once it is defined. It is typically used to create a private scope for variables, preventing them from polluting the global scope.
(function(){
    console.log('IIFE executed')
})();
(function(param){
    console.log(param);
})(12323);
//By wrapping the function inside parentheses and immediately invoking it with (), the function is executed immediately without the need to explicitly call it.
//Use case of IIFE
// Private Scope: IIFEs are commonly used to create a private scope for variables, preventing them from being accessed outside the function.
(function(){
    const app = {name: 'xyz'};
})()
var homeScreenView = (function() {
    var privateVariable = 'This is private';
    function privateFunction() {
      console.log('This is a private function');
    }
    // Code inside the IIFE
    function init(){
        console.log(privateVariable);
    }
    return {
        init: init,
    }
})();
homeScreenView.init();

// Avoiding Global Pollution: By encapsulating code within an IIFE, you can prevent variables and functions from conflicting with other code in the global scope.
(function() {
    var globalVariable = 'This is a global variable';
  
    // Code inside the IIFE
})();
//console.log(globalVariable); // Error: globalVariable is not defined

// Modular Code: IIFEs are useful for creating modular code by isolating functionality within separate functions and executing them immediately.

var module = (function(){
    var privateVariable = 'This is private';
    function privateFunction() {
      console.log('This is a private function',privateVariable);
    }
    function publicMethod(){
        console.log('in public method');
        privateFunction();
    }
    return {
        publicMethod
    }
})();
module.publicMethod();

// Arrow functions
//() => single line function body // no need to add any return

// (parameters) => {
//     function body line 1  
//     function body line 2  
// }

var sayHello = () => {
    return 'Hello';
}
//Arrow function with no param and implicit return
sayHello = () => 'Hello';
console.log(sayHello());

//Arrow function with single param and implicit return
const double = (number) => number*2;
console.log(double(5)); 

//arrow funciton with multi params and multi lines
const addNumbers = (a,b) => {
    const sum = a+b;
    return sum;
}
console.log(addNumbers(22,11));

// Problem 1: Convert a regular function to an arrow function.
function square(number) {
    return number * number;
}

//Problem 2: Use arrow functions to filter an array of numbers.

//Problem 3: Rewrite a function expression as an arrow function.
const sayHelloo = function() {
    return 'Hello!';
};

//Problem 4: Use arrow functions to map an array of strings to uppercase.
const words = ['hello', 'world', 'javascript'];

//Problem 5: Use arrow functions to calculate the sum of an array of numbers.
const numbers = [1, 2, 3, 4, 5];