//Callback in javascript
// - a callback is a function that is passed as an argument to another function and is invoked inside that function. The callback function is called back or executed at a later time, typically when a certain event occurs or when an asynchronous operation completes.
function callUserApi(successCallback, errorCallback){
    const userData = {
      name: 'testuser',
      blah: 'blah blahhhh'
    }
    var isSuccess = true;
    
    setTimeout(function() {
      if(isSuccess) {      
        successCallback(userData);
      }else{
        errorCallback("something went wrong")
      }
    },1000);
  }
  
  
  function getUserData(callback){
    console.log('in a');
    callUserApi(function(response){
      console.log('user data', response);
      callback(response);
    },function(error){
        console.log(error)
    })
  }
  
  function renderUserData(userData){
    console.log('in b',userData);
    document.body.innerHTML +=` <div>${userData.name}</div>`
  }
  getUserData(renderUserData);
  

  // Ques 1: create a function delay which will delayed given functionality by given time.
  function delay(func, time) {
    setTimeout(func, time);
  }
  function sayHello() {
    console.log("Hello");
  }
  
  delay(sayHello, 2000);

  
  
  //ques 2: Create a function that filters an array based on a given condition using a callback.
  function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }

 const numbers = [1, 2, 3, 4, 5, 6];


 const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

 console.log(evenNumbers);

  
  // ques 3: Create a function that invokes a callback for each element in an array.
  function forEachElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
    const fruits = ['apple', 'banana', 'cherry'];

  forEachElement(fruits, (fruit, index) => {
  console.log(`${index}: ${fruit}`);
  });
  
  //ques 4: Implement a function that accepts two numbers and a callback to perform a mathematical operation.
  function performOperation(num1, num2, callback) {
    return callback(num1, num2);
  }
  const resultAdd = performOperation(5, 3, (a, b) => a + b);
  console.log(resultAdd); 
  
  //ques 5: Create a function that performs an operation on each element of an array using a callback.
  function operateOnArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
    const squaredNumbers = operateOnArray(numbers, (num) => num * num);

    console.log(squaredNumbers); 

  

  //ques 6: Create a function that converts an array of strings to uppercase using a callback.
  function convertToUppercase(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  const words = ['hello', 'Sandhya'];

 const uppercasedWords = convertToUppercase(words, (word) => word.toUpperCase());

 console.log(uppercasedWords); 
