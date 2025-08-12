// Create an ArrayBuffer of 16 bytes
const buffer = new ArrayBuffer(16);

// Create a view for the buffer as 32-bit integers
const int32View = new Int32Array(buffer);

// Fill the array
int32View[0] = 42;
int32View[1] = 123456;
int32View[2] = -98765;
int32View[3] = 999999999;

// Log the array
console.log("Int32Array:", int32View);

// Create a view for the same buffer as 8-bit integers
const int8View = new Int8Array(buffer);

// Log the 8-bit view (shows byte-level representation)
console.log("Int8Array:", int8View);

// Example: Modifying the buffer through another view
int8View[0] = 7;  // changes the first byte

console.log("After modifying first byte:");
console.log("Int32Array:", int32View);
console.log("Int8Array:", int8View);
