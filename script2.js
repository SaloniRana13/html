const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : "Not found";
  }
};
const proxy = new Proxy({ name: "Chavi" }, handler);
console.log(proxy.name);  // Chavi
console.log(proxy.age);   // Not found
