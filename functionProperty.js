//function recap
  //function creation
  //function invocation
  //function with params
  //function with return

//constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  //with new keyword constructor is being initialized and returning an instance
  const person1 = new Person('John', 20);
  console.log(person1);
  const person2 = new Person('tom', 30);
  console.log(person2);
  
  //Built in constructors
  const date = new Date();
  const obj = new Object();
  const arr = new Array();
  
  console.log(date, obj, arr);
  
  //Create a constructor function for a Book with properties like title, author, and year of publication. Implement a method to display the book's details.
  function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getBookDetails = function(){
      console.log(`${this.title} by ${this.author} published on ${this.year}`)
    }
  }
  const book1 = new Book('The Monk Who Sold His Ferrari', 'Robin Sharma', '2000')
  console.log(book1);
  book1.getBookDetails();
  
  //Assignment 
  //ques: Create a constructor function for a Car with properties like make, model, and year. Implement a method to calculate the car's age based on the current year.
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  
    this.calculateAge = function() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    };
  }
  
 
  const myCar = new Car('Toyota', 'Camry', 2015);
  console.log(`My car is a ${myCar.make} ${myCar.model} from ${myCar.year}.`);
  console.log(`The car's age is: ${myCar.calculateAge()} years.`);
  
  
  //ques: Create a constructor function for a Rectangle with properties like width and height. Implement methods to calculate the area and perimeter of the rectangle.
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  
    // Method to calculate the area
    this.calculateArea = function() {
      return this.width * this.height;
    };
  
    // Method to calculate the perimeter
    this.calculatePerimeter = function() {
      return 2 * (this.width + this.height);
    };
  }
  
  const myRectangle = new Rectangle(5, 10);
  console.log(`Rectangle width: ${myRectangle.width}, height: ${myRectangle.height}`);
  console.log(`Area: ${myRectangle.calculateArea()}`);
  console.log(`Perimeter: ${myRectangle.calculatePerimeter()}`);
  
  //ques: Create a constructor function for a Calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division.
  function Calculator() {
    // Method to perform addition
    this.add = function(a, b) {
      return a + b;
    };
  
    // Method to perform subtraction
    this.subtract = function(a, b) {
      return a - b;
    };
  
    // Method to perform multiplication
    this.multiply = function(a, b) {
      return a * b;
    };
  
    // Method to perform division
    this.divide = function(a, b) {
      if (b === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return a / b;
    };
  }
  
  const myCalculator = new Calculator();
  
  console.log(`Addition: 5 + 3 = ${myCalculator.add(5, 3)}`);
  console.log(`Subtraction: 5 - 3 = ${myCalculator.subtract(5, 3)}`);
  console.log(`Multiplication: 5 * 3 = ${myCalculator.multiply(5, 3)}`);
  console.log(`Division: 5 / 3 = ${myCalculator.divide(5, 3)}`);
  console.log(`Division by zero: 5 / 0 = ${myCalculator.divide(5, 0)}`);
  
  
  // New Topic: function Parameter vs Arguments
  function sum(a,b) { return a+b};//a and b are the prameters
  sum(1,2)
  
  function addition(){
    console.log(arguments, arguments.length);
    let total = 0;
    for(let i=0; i < arguments.length; i++) {
      total += arguments[i]
    }
    console.log('total: ', total)
  }
  addition(1,2,3,4,5)
  //Note: It's important to note that arguments is not a true array but an array-like object. Therefore, it doesn't have access to array methods like forEach or map. To use such methods, you can convert arguments to a real array using techniques like Array.from(arguments)
  
  // ques: create a function sentenceMaker which can accept any number of arguments and returns a sentence after contcatenating passed arguments(words) and first letter of sentence must be captital.
  function sentenceMaker() {
    let sentence = Array.from(arguments).join(' ');
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  
    return sentence;
  }
  
  console.log(sentenceMaker('hello', 'this', 'is', 'Sandhya'));
 
  //Functions vs methods()
  // Functions are standalone blocks of code that can be called and executed independently. They are defined outside of any object or class
  function greet(name){
      console.log('Hello ',name);
  }
  greet('Trump');
  
  // Methods are functions that are defined as properties of objects or classes.
  // They are associated with specific objects or classes and operate on the data and behavior of those objects or classes.
  // Methods can access the object's properties and other methods using the this keyword.
  // They are invoked using the object reference followed by the method name and parentheses, optionally passing any required arguments.
  const student = {
      name: 'john',
      greet: function(){
          console.log(`Hello ${this.name} !`);
      }
  }
  student.greet();
  
  // function declaration vs Function expression
  //Function declarations are hoisted, meaning they are available for use anywhere in their containing scope.
  welcome('Bahubali')
  function welcome(name){
      console.log(`welcome ${name}`);
  }
  
  // Function expressions are not hoisted and must be defined before they are used.
  // They are defined by assigning a function to a variable or constant.
  // Function expressions can be anonymous or named.
  var doSwagat = function (name){
      console.log(`aapka swagath ha LGT mai MR/Ms ${name}`)
  }
  doSwagat('Kattappa');
  
  // functions are objects, which means they can have properties and methods just like any other object. This unique characteristic of functions being objects allows for powerful and flexible programming capabilities. 
  //In JavaScript, functions are considered "first-class citizens" because they can be treated just like any other value. This means they can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures. This behavior is possible because functions are objects.
  welcome.prop1 = 'prop1111';
  console.log(welcome.prop1);
  
  //Anonymous function
  // an anonymous function is a function that does not have a name. It is created without a function name and is often defined inline, either as a function expression or as an argument to another function.
  //creating and invoking anonymous function
  const greeting = function(name){
      console.log('Hello, ',name);
  }
  greeting('John');
  
  //Anonymous function as a callback
  [1,2,3,4].forEach(function(item){
      console.log(item);
  })
  
//   document.addEventListener('click',function(){
//       console.log('clicked')
//   })



