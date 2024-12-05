/*
Associative Arrays
Many programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.
*/

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

const cars2 = [];
cars2[0] = "Saab";
cars2[1] = "Volvo";
cars2[2] = "BMW";
console.log(cars2);

const cars3 = new Array("Saab", "Volvo", "BMW");
console.log(cars3);

console.log(cars[0]);
cars[0] = "Opel";
console.log(cars[0]);

console.log(cars.length);
console.log(cars.toString());

const dynamicArray = [5, "Hello", { name: "Waqar Ali Siyal", age: 20 }, true, [4, 6]];
console.log(dynamicArray);

const numbers = [7, 3, 60, 43, 65, 2, 80, 32];
console.log(numbers.sort());

let fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
fruits[fruits.length] = "Mango";
console.log(fruits);
console.log(typeof fruits);
console.log(fruits instanceof Array);
console.log(Array.isArray(fruits));

// Array Methods
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.at(3));
console.log(fruits.join(" * "));    // Joins all elements of an array into a string.
console.log(fruits.pop());
console.log(fruits.push("Kiwi"));
console.log(fruits.shift());       // Removes the first element from an array and returns it.
console.log(fruits.unshift("Mango"));   // Adds new elements to the beginning of an array, and returns the new length.
delete fruits[fruits.length - 1]    // Deletes the last element of an array.
console.log(fruits);
console.log(fruits.reverse());

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys, myGirls);     // Concatenates (joins) two or more arrays.
console.log(myChildren);

const colors = ["Red", "Green", "Blue", "Yellow"];
const colors2 = ["Red", "Green", "Blue", "Yellow"];
colors.copyWithin(2, 0);      //  Copy to index 2, all elements from index 0
console.log(colors);
colors2.copyWithin(2, 0, 2);     // Copy to index 2, the elements from index 0 to 2
console.log(colors2);

const myArr = [[1, 2], [3, 4], [5, 6]];
const flattenArr = myArr.flat();    // Flattens an array of nested arrays.
console.log(flattenArr);
const flattenMap = flattenArr.flatMap(x => x * 10);   // Creates a new array by mapping each element in an array, through a function.
console.log(flattenMap);


/*
The splice() method adds new items to an array.
The first parameter(2) defines the position where new elements should be added(spliced in).
The second parameter(0) defines how many elements should be removed.
The rest of the parameters("Lemon", "Kiwi") define the new elements to be added.
*/
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");    // Adds new elements to an array (at a specified position).
console.log(fruits);

// The splice() method slices out a piece of an array.
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

/*
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
*/
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);

/*
ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

The difference between the new toSpliced() method and the old splice() method is that the new method
creates a new array, keeping the original array unchanged, while the old method altered the original array.
*/
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

// Slice out a part of an array starting from array element 1 ("Orange")
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const fruits1 = fruits.slice(1);
console.log(fruits1);
const fruits2 = fruits.slice(1, 3);
console.log(fruits2);


