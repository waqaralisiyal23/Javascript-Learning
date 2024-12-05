const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.includes("Orange"));

const numbers = [4, 9, 16, 25, 29];
console.log(numbers.find(myFunction));      // Returns the value of the first element in an array that pass a test (provided as a function).
console.log(numbers.findIndex(myFunction));     // Returns the index of the first element in an array that pass a test (provided as a function).

function myFunction(value, index, array) {
    return value > 18;
}

const temp = [27, 28, 30, 40, 42, 35, 30];
console.log(temp.findLast(x => x > 40));
console.log(temp.findLastIndex(x => x > 40));