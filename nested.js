// Define a nested object
const person = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: {
      code: 10001,
      plus4: "1234"
    }
  }
};

// Function to display person info
function showPersonInfo() {
  const output = document.getElementById("output");
  const info = `
Name: ${person.name}
Age: ${person.age}
City: ${person.address.city}
ZIP Code: ${person.address.zip.code}-${person.address.zip.plus4}
  `;
  output.textContent = info;
}
