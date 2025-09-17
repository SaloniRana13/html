//the prototype is an object that is associated with every object created using a constructor function or the class syntax. It acts as a blueprint for objects, defining the shared properties and methods that the objects will have access to.
// function Test(){
//     console.log('in test');
// }
// const test = new Test();
// console.log(Object.getPrototypeOf(test) == Test.prototype);
// const test1 = new Test();
// console.log(Object.getPrototypeOf(test1) == Test.prototype);
// console.log(Object.getPrototypeOf(test) == Object.getPrototypeOf(test1));

//Prototype Pattern
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function(){
//     return Hello, My name is ${this.name};
// }

// const person1 = new Person('Trump', 80);
// console.log(person1, person1.greet());

// const person2 = new Person('Putin', 70);
// console.log(person2, person2.greet());

// Person.prototype.swagatham = function(){
//     return Hello, Mai ${this.name} aapka swagat karta hu!!
// }
// console.log(person1, person1.swagatham());

//Pros
// Code Reusability: Objects created with the Prototype Pattern can share the same prototype object, reducing duplication of code.

// Dynamic Behavior: Modifications made to the prototype object are immediately reflected in all instances that inherit from it. This allows for dynamic updates and changes to the objects.

// Efficient Memory Usage: As the methods and properties are shared among instances through the prototype chain, it saves memory compared to creating them individually for each instance.

//cons: shared state, No private members

//Create a Button component with Prototype pattern.
// function Button(text){
//     this.text = text;
// }
// Button.prototype.render = function(){
//     const buttonElement = document.createElement('button');
//     buttonElement.textContent = this.text;
//     document.body.appendChild(buttonElement)
// }
// const button1 = new Button('Click Me');
// button1.render();
// const submitBtn = new Button('Submit');
// submitBtn.render();

//create Modal component with prototype pattern. Create a Modal constructor which accepts content of modal and has 2 prototype methods open and close.
function Modal(content) {
    this.content = content;
    this.modalElement = null;
    this.closeButton = null;
  }
  
  Modal.prototype.open = function() {
    this.modalElement = document.createElement('div');
    this.modalElement.className = 'modal';
  
    const contentElement = document.createElement('div');
    contentElement.className = 'modal-content';
  
    contentElement.innerHTML = `
      ${this.content}
      <button class="closeBtn">Close</button>
    `;
  
    this.modalElement.appendChild(contentElement);
    document.body.appendChild(this.modalElement);
  
    this.closeButton = contentElement.querySelector('.closeBtn');
    this.closeButton.addEventListener('click', this.close.bind(this));
  
  };
  
  Modal.prototype.close = function() {
    if (this.modalElement) {
      this.closeButton.removeEventListener('click', this.close.bind(this));
      document.removeEventListener('keydown', this.escListener);
      document.body.removeChild(this.modalElement);
      this.modalElement = null;
      this.closeButton = null;
    }
  };


  document.getElementById('openModalBtn').addEventListener('click', function() {
    const modal = new Modal('<h2>Hello! nice too meet you</h2>');
    modal.open();
  });
  
//Create a Tab component and prototype has methods like addTab, render etc.


