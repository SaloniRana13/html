/*Question 1: Create a Simple Pizza Promise
Create a promise named orderPizza that resolves after 2 seconds with the message "Pizza is ready!". Then consume the promise and log the result.*/
// const Order=()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Pizza is ready!")
//         },2000)
//     })
// }
// console.log(Order());

//using async
const orderPizza = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza is ready!");
    }, 2000);
  });

async function getPizza() {
const result = await orderPizza;
console.log(result);
}
getPizza();


/*Question 2: Handle Rejection Gracefully
Extend the previous example. Add a condition that if isOvenWorking is false, the promise should reject with the message "Oven is broken!".*/
// let isOvenWorking = false; 

// const OvenWorking = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isOvenWorking) {
//                 resolve("Pizza is ready!");
//             } else {
//                 reject("Oven is broken!");
//             }
//         }, 2000); // 2-second delay
//     });
// };

// // Consuming the promise
// OvenWorking()
//     .then((message) => {
//         console.log(message); // Expected: "Pizza is ready!" if oven works
//     })
//     .catch((error) => {
//         console.error(error); // Expected: "Oven is broken!" if oven fails
//     });



// asyn

const isOvenWorking = false; 

const orderPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isOvenWorking) {
      resolve("Pizza is ready!");
    } else {
      reject("Oven is broken!");
    }
  }, 2000);
});

async function getPizza() {
  try {
    const result = await orderPizza;
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPizza();

/*Question 3: Chain Multiple Promises
Create 3 separate promises:
orderPizza()
addDrink(pizza)
addDessert(meal)
Chain them so that the final log is: "Final Meal: 🍕 Pizza + 🥤 Drink + 🍰 Dessert"*/

function orderPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("🍕 Pizza");
        }, 2000);
    });
}

function addDrink(pizza) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${pizza} + 🥤 Drink`);
        }, 1000);
    });
}


function addDessert(meal) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Final Meal: ${meal} + 🍰 Dessert`);
        }, 1000);
    });
}

// Chaining the promises
// orderPizza()
//     .then(pizza => addDrink(pizza))
//     .then(mealWithDrink => addDessert(mealWithDrink))
//     .then(finalMeal => console.log(finalMeal))
//     .catch(error => console.error("Error:", error));
async function createFullMeal() {
    try {
      const pizza = await orderPizza();
      const mealWithDrink = await addDrink(pizza);
      const fullMeal = await addDessert(mealWithDrink);
      console.log("Final Meal:", fullMeal);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  }
  
 createFullMeal();

/*Question 4: Combine Multiple Promises with Promise.all
You’re ordering from 3 restaurants at the same time:
🍕 Pizza (2s)
🍝 Pasta (1s)
🥤 Drink (1.5s)
Use Promise.all to serve the full meal only when all are ready.*/
const pizza=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("🍕 Pizza")
        },2000)
    })
}
const Pasta=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("🍝 Pasta")
        },1000)
    })
}
const Drink=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("🥤 Drink")
        },1500)
    })
}
Promise.all([pizza(),Pasta(),Drink()])
.then((mess)=>{console.log(mess.join(','))})
.catch((err)=>console.error(err));

// using asyn
function orderPizza() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("🍕 Pizza");
      }, 2000);
    });
  }
  
  // Simulate ordering pasta (1s)
  function orderPasta() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("🍝 Pasta");
      }, 1000);
    });
  }
  
  // Simulate ordering drink (1.5s)
  function orderDrink() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("🥤 Drink");
      }, 1500);
    });
  }
  

async function getFullOrder() {
    try {
      const [pizza, pasta, drink] = await Promise.all([
        orderPizza(),
        orderPasta(),
        orderDrink()
      ]);
  
      console.log("Full Order:", `${pizza}, ${pasta}, ${drink}`);
    } catch (error) {
      console.error(" failed:", error);
    }
  }
  
  getFullOrder();

/*Question 5: Create a Delay Utility with Promise
Create a reusable delay(ms) function that returns a promise which resolves after the given milliseconds. Use it to log three messages with a 1-second delay between each.*/
function delay(ms) {
    return new Promise((resolve,reject) => setTimeout(resolve, ms));
}
delay(1000)
    .then(() => {
        console.log("hello");
        return delay(1000);
    })
    .then(() => {
        console.log("this is sandhya");
        return delay(1000);
    })
    .then(() => {
        console.log("nice to meet u");
    });
    async function logMessages() {
        console.log("Message 1");
        await delay(1000);

        console.log("Message 2");
        await delay(1000);

        console.log("Message 3");
    }
      
      
      logMessages();

/*Question 6: Simulate User Authentication (Basic Promise)
Create a function loginUser(username, password) that returns a Promise.
If username is "admin" and password is "1234", resolve with "Login successful!"
Otherwise, reject with "Invalid credentials"*/
const username="admin";
const password=1234;
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        (username === "admin" && password === 1234)
            ? resolve("Login successful!")
            : reject("Invalid credentials");
    });
}
loginUser(username,password).then(result=>console.log(result))
.catch(err=>console.error(err));

/*Question 7: Chaining - Load User → Fetch Settings
First, simulate fetching user info with getUser() → resolves with { id: 1, name: 'John' }`
Then use that user’s id to fetch settings from getUserSettings(userId)
Return and log final settings.*/
// Step 1: Simulate fetching user
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John' });
        }, 1000);
    });
}

// Step 2: Simulate fetching user settings based on userId
function getUserSettings(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ theme: 'dark', notifications: true, userId });
        }, 1000);
    });
}

// Step 3: Chain the promises
getUser()
    .then(user => {
        console.log("User:", user);
        return getUserSettings(user.id);
    })
    .then(settings => {
        console.log("User Settings:", settings);
    })
    .catch(error => {
        console.error("Error fetching user or settings:", error);
    });

/*

Question 8: Promise.all - Load Dashboard Data in Parallel
Fetch data from:
getPosts()
getNotifications()
getMessages()
All must run in parallel. Show result once all are loaded.*/
// Simulating API calls with Promises
function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts loaded");
        }, 2000);
    });
}

function getNotifications() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Notifications loaded");
        }, 1000);
    });
}

function getMessages() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Messages loaded");
        }, 1500);
    });
}

// Load all dashboard data in parallel
Promise.all([getPosts(), getNotifications(), getMessages()])
    .then((data) => {
        console.log(" Dashboard Data:");
        data.forEach(item => console.log(item));
    })
    .catch((err) => {
        console.error("Error loading dashboard:", err);
    });





/*
Question 9: Conditional Flow with Promises
Create a function getWeather(isOnline)
If isOnline is true, resolve with "Weather data fetched"
Else, reject with "No internet connection"
Consume it and show both resolve and reject handling.
*/
function getWeather(isOnline){
    return new Promise((resolve, reject) => {
        if(isOnline){
            resolve("Weather data fetched");
        }
        else{
            reject("No internet connection");
        }
    })
}
getWeather(true).then(result=>console.log(result))
.catch(err=>console.log(err));
/*
Question 10: Retry Logic (Recursive Promise Use)
Simulate a flaky API call with 50% success rate.
If it fails, retry up to 3 times.
Create fetchWithRetry(attempt = 1) function.*/
// Simulated flaky API call with 50% success rate
function fakeApiCall() {
    return new Promise((resolve, reject) => {
      const isSuccess = Math.random() < 0.5; 
      setTimeout(() => {
        isSuccess ? resolve("Success!") : reject(" Failed");
      }, 500); 
    });
  }
  
  // Recursive retry logic with max 3 attempts
  function fetchWithRetry(attempt = 1) {
    console.log(`Attempt ${attempt}...`);
  
    return fakeApiCall()
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        if (attempt < 3) {
          console.warn(`${error}, retrying...`);
          return fetchWithRetry(attempt + 1);
        } else {
          console.error(" All attempts failed.");
          throw new Error("Final failure after 3 attempts");
        }
      });
  }
  
  fetchWithRetry()
    .then((res) => console.log("Final Result:", res))
    .catch((err) => console.log("Final Error:", err.message));
  