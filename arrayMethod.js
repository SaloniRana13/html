//push(): Adds one or more elements to the end of an array
let arr = [1, 2, 3];
arr.push(4);  // [1, 2, 3, 4]

//pop(): Removes the last element from an array.
let arr = [1, 2, 3];
arr.pop();  // [1, 2]

//shift(): Removes the first element from an array.

let arr = [1, 2, 3];
arr.shift();  // [2, 3]

//unshift(): Adds one or more elements to the beginning of an array.
let arr = [1, 2, 3];
arr.unshift(0);  // [0, 1, 2, 3]

//splice(): Adds or removes elements at a specified index.
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b');  // [1, 2, 'a', 'b', 4]

//concat(): Merges two or more arrays into a new array.
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);  // [1, 2, 3, 4]

//join(): Combines all elements of an array into a string, with an optional separator
let arr = ['a', 'b', 'c'];
let str = arr.join('-');  // 'a-b-c'

//slice(): Returns a shallow copy of a portion of an array into a new array.
let arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3);  // [2, 3]

//indexOf(): Returns the first index of a specified element, or -1 if not found.
let arr = [1, 2, 3];
let index = arr.indexOf(2);  // 1

//lastIndexOf(): Returns the last index of a specified element, or -1 if not found.
let arr = [1, 2, 3, 2];
let index = arr.lastIndexOf(2);  // 3

//includes(): Checks if an array contains a specified element.
let arr = [1, 2, 3];
let hasTwo = arr.includes(2);  // true

//find(): Returns the first element that satisfies a provided testing function.
let arr = [1, 2, 3];
let found = arr.find(x => x > 1);  // 2

//findIndex(): Returns the index of the first element that satisfies a provided testing function.
let arr = [1, 2, 3];
let index = arr.findIndex(x => x > 1);  // 1

//filter(): Creates a new array with all elements that pass the provided test.
let arr = [1, 2, 3, 4];
let even = arr.filter(x => x % 2 === 0);  // [2, 4]

//map(): Creates a new array by calling a function on each element.
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);  // [2, 4, 6]

//reduce(): Applies a function to each element to reduce it to a single value.
let arr = [1, 2, 3];
let sum = arr.reduce((acc, curr) => acc + curr, 0);  // 6

//reduceRight(): Like reduce(), but applies the function from right to left.
let arr = [1, 2, 3];
let sum = arr.reduceRight((acc, curr) => acc + curr, 0);  // 6

//forEach(): Executes a provided function once for each array element.
let arr = [1, 2, 3];
arr.forEach(x => console.log(x));  // Logs: 1, 2, 3

//sort(): Sorts the elements of an array in place, optionally with a compare function.
let arr = [3, 1, 2];
arr.sort((a, b) => a - b);  // [1, 2, 3]

//reverse(): Reverses the order of elements in an array.
let arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1]

//some(): Tests if at least one element passes the provided test.
let arr = [1, 2, 3];
let hasNegative = arr.some(x => x < 0);  // false

//every(): Tests if all elements pass the provided test.
let arr = [1, 2, 3];
let allPositive = arr.every(x => x > 0);  // true

//fill(): Fills all elements of an array with a static value.
let arr = [1, 2, 3];
arr.fill(0, 1, 3);  // [1, 0, 0]

//copyWithin(): Shallow copies a portion of the array to another location within the same array.
let arr = [1, 2, 3, 4];
arr.copyWithin(0, 2, 4);  // [3, 4, 3, 4]

//flat(): Flattens a nested array into a single array.
let arr = [1, [2, 3], [4, 5]];
let flattened = arr.flat();  // [1, 2, 3, 4, 5]

//flatMap(): Maps each element to a new array and then flattens the result.
let arr = [1, 2, 3];
let result = arr.flatMap(x => [x, x * 2]);  // [1, 2, 2, 4, 3, 6]

//from(): Creates a new array from an array-like or iterable object.
let str = 'hello';
let arr = Array.from(str);  // ['h', 'e', 'l', 'l', 'o']

//isArray(): Checks if the provided value is an array
Array.isArray([1, 2, 3]);  // true

//keys(): Returns a new Array Iterator object containing the keys of an array.
let arr = [1, 2, 3];
let keys = arr.keys();  // Returns an iterator object

//values(): Returns a new Array Iterator object containing the values of an array
let arr = [1, 2, 3];
let values = arr.values();  // Returns an iterator object

//entries(): Returns a new Array Iterator object containing key-value pairs of an array.
let arr = [1, 2, 3];
let entries = arr.entries();  // Returns an iterator object

//at(): Returns the element at a specified index, including negative indices.
let arr = [1, 2, 3];
let element = arr.at(-1);  // 3

//toString(): Returns a string representation of the array.
let arr = [1, 2, 3];
let str = arr.toString();  // '1,2,3'

//toLocaleString(): Returns a string representation of the array, formatted according to locale-specific settings.
let arr = [1, 2, 3];
let localeStr = arr.toLocaleString();  // '1,2,3'

//set(): Sets a value at a specific index in a typed array (like Int32Array).
let arr = new Int32Array(3);
arr.set([1, 2, 3]);  // Sets values in typed array

//get(): Gets a value at a specific index in a typed array (like Int32Array).
let arr = new Int32Array([1, 2, 3]);
let value = arr.get(1);  // 2

//length: let arr = [1, 2, 3];
let len = arr.length;  // 3

//A property that returns the number of elements in the array.
let arr = [1, 2, 3];
let len = arr.length;  // 3
