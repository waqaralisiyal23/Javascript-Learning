/*
JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
*/

let str = "Hello";
let length = 16;
let weight = 7.5;
let x = BigInt("1234567890123456789012345678901234567890");
let bool = true;
let und = undefined;
let n = null;
let sym = Symbol("symbol");
let obj = { name: "Waqar Ali Siyal", age: 20 };
// Array Object
let arr = [1, 2, 3, 4, 5];
let date = new Date();

console.log(str);
console.log(length);
console.log(weight);
console.log(x);
console.log(bool);
console.log(und);
console.log(n);
console.log(sym);
console.log(obj);
console.log(arr);
console.log(date);

// Exponential Notation
let y = 123e5;  // 12300000
let z = 123e-5;     // 0.00123

console.log(y);
console.log(z);

// typeof Operator
console.log(typeof str);
console.log(typeof length);
console.log(typeof obj);
console.log(typeof arr);

// Access obj properties and arr elements
console.log(obj.name);
console.log(obj.age);
console.log(arr[0]);
console.log(arr.length);