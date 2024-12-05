// Create an Object
const person = {
    firstName: "Waqar Ali",
    lastName: "Siyal",
    age: 24,
};

// let { firstName, lastName } = person;
// console.log(firstName, lastName);    // Waqar Ali Siyal

// The order of the properties does not matter
let { lastName, firstName } = person;
console.log(firstName, lastName);   // Waqar Ali Siyal

/*
Note:
Destructuring is not destructive.
Destructuring does not change the original object.
*/

/*
Object Default Values
For potentially missing properties we can set default values
*/
let { firstName: fName, lastName: lName, country = 'US' } = person;
console.log(fName, lName, country);    // Waqar Ali Siyal US

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);    // Bananas Oranges
// We can skip array values using two or more commas
let [fruit11, , , fruit22] = fruits;
console.log(fruit11, fruit22);    // Bananas Mangos
// We can pick up values from specific index locations of an array
let { [1]: f1, [2]: f2 } = fruits;
console.log(f1, f2);    // Oranges Apples

const numbers = [10, 20, 30, 40, 50, 60, 70];
// This syntax will store all remaining values into a new array
const [a, b, ...rest] = numbers;
console.log(a, b, rest);    // 10 20 [30, 40, 50, 60, 70]


// You can swap the values of two variables using a destructuring assignmen
let str1 = 'Str1';
let str2 = 'Str2';
[str2, str1] = [str1, str2];
console.log(str1, str2);    // Str2 Str1