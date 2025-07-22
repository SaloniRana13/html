// script.js

// Define a nested object
const user = {
  name: "Alice",
  age: 28,
  address: {
    street: "123 Main St",
    city: "Metropolis",
    zip: "12345"
  },
  hobbies: ["reading", "cycling", "gaming"]
};

// Use the object in your JS code
function displayUserInfo() {
  const output = `
    Name: ${user.name}<br>
    Age: ${user.age}<br>
    City: ${user.address.city}<br>
    Hobby: ${user.hobbies[0]}
  `;
  document.getElementById("info").innerHTML = output;
}

// Call function when page loads
window.onload = displayUserInfo;
