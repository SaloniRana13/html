//the prototype is an object that is associated with every object created using a constructor function or the class syntax. It acts as a blueprint for objects, defining the shared properties and methods that the objects will have access to.
function Test(){
    console.log('in test');
}
const test = new Test();
console.log(Object.getPrototypeOf(test) == Test.prototype);
const test1 = new Test();
console.log(Object.getPrototypeOf(test1) == Test.prototype);
console.log(Object.getPrototypeOf(test) == Object.getPrototypeOf(test1));

//Prototype Pattern
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    return `Hello, My name is ${this.name}`;
}

const person1 = new Person('Trump', 80);
console.log(person1, person1.greet());

const person2 = new Person('Putin', 70);
console.log(person2, person2.greet());

Person.prototype.swagatham = function(){
    return `Hello, Mai ${this.name} aapka swagat karta hu!!`
}
console.log(person1, person1.swagatham());

//Pros
// Code Reusability: Objects created with the Prototype Pattern can share the same prototype object, reducing duplication of code.

// Dynamic Behavior: Modifications made to the prototype object are immediately reflected in all instances that inherit from it. This allows for dynamic updates and changes to the objects.

// Efficient Memory Usage: As the methods and properties are shared among instances through the prototype chain, it saves memory compared to creating them individually for each instance.

//cons: shared state, No private members

//Create a Button component with Prototype pattern.
function Button(text){
    this.text = text;
}
Button.prototype.render = function(){
    const buttonElement = document.createElement('button');
    buttonElement.textContent = this.text;
    document.body.appendChild(buttonElement)
}
const button1 = new Button('Click Me');
button1.render();
const submitBtn = new Button('Submit');
submitBtn.render();

//create Modal component with prototype pattern. Create a Modal constructor which accepts content of modal and has 2 prototype methods open and close.

function Modal(content){
    this.content = content;
    this.element = null;
}

Modal.prototype.open = function(){
    const modalElement = document.createElement('div');
    this.element = modalElement;
    modalElement.classList.add('modal');
    modalElement.innerHTML = <div class='modal-content'>${this.content}</div>;
    document.body.appendChild(modalElement);
}

Modal.prototype.close = function(){
    document.body.removeChild(this.element);
}

const myModal = new Modal('this is a modal example');
document.querySelector('button').addEventListener('click', function(){
    myModal.open();
})

//Create a Tab component and prototype has methods like addTab, render etc.
function Tab(){
    this.tabs = [];
}

Tab.prototype.addTab = function(label, content){
    this.tabs.push({label, content});
}

Tab.prototype.render = function(){
    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    this.tabs.forEach(tab => {
        const tabButton = document.createElement('button');
        tabButton.textContent = tab.label;
        tabButton.addEventListener('click', (event) => {
            console.log(tab.content);
            const contentEle = document.createElement('div');
            contentEle.innerHTML = tab.content;
            event.target.parentElement.appendChild(contentEle);
        })
        tabContainer.appendChild(tabButton);
    })
    document.body.appendChild(tabContainer)
}

const myTabComponent = new Tab();
myTabComponent.addTab('Tab 1', 'Content for Tab 1');
myTabComponent.addTab('Tab 2', 'Content for Tab 2');
myTabComponent.render();

//Prototype Chaining
//Prototype chaining in JavaScript is the process by which objects inherit properties and methods from their prototype. When you access a property or method on an object, if the object itself doesn't have that property, JavaScript looks for it in the object's prototype, and if it's not found there, it continues to look up the prototype chain until it reaches the top level (Object.prototype) or finds the property/method.
/**
 * How does it work?
 * suppose you are trying to access anyObj.toString():
 * - javascript looks for toString directly on anyObj
 * - if not found, it looks at anyObj.[[prototype]](or Object.getProtoTypeof(anyObj))
 * - if still not found, it continues up the chain until:
 *      - it finds the property, or
 *      - it reaches the end of chain(Object[[prototype]]) and return null    
 * anyObj --> prototypeObj --> Object.prototype --> null     
 */
const animal = {
    eats: true
}
const rabbit = {
    jumps: true,
    _proto_: animal
}
const babyRabbit = {
    color: 'white',
    _proto_: rabbit
}
console.log(babyRabbit.color)
console.log(babyRabbit.jumps)
console.log(babyRabbit.eats)
console.log(babyRabbit);