function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]



const user = {
  name: "Alice",
  age: 25,
  country: "USA",
  role: "admin"
};

const { name, ...others } = user;
console.log(name);   // Alice
console.log(others); // { age: 25, country: "USA", role: "admin" }
