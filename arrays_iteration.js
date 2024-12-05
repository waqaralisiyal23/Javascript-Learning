const numbers = [45, 4, 9, 16, 25];
numbers.forEach((value, index, array) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

const numbers2 = numbers.map((value, index, array) => {
    return value * 2;
});
console.log(numbers2);

const numbers3 = numbers.flatMap((x) => x * 2);
console.log(numbers3);

const numbers4 = numbers.filter((value, index, array) => {
    return value > 18;
});
console.log(numbers4);

/*
The reduce() method runs a function on each array element to produce (reduce it to) a single value.
The reduce() method works from left-to-right in the array.
*/
let sum = numbers.reduce((total, value, index, array) => {
    return total + value;
});
console.log(sum);

sum = numbers.reduce((total, value, index, array) => {
    return total + value;
}, 101);
console.log(sum);

/*
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
The reduceRight() works from right-to-left in the array.
*/
sum = numbers.reduceRight((total, value, index, array) => {
    return total + value;
});
console.log(sum);

let allOver18 = numbers.every((value, index, array) => {
    return value > 18;
});
console.log(allOver18);

let someOver18 = numbers.some((value, index, array) => {
    return value > 18;
});
console.log(someOver18);

let arr = Array.from("ABCDEFG");
console.log(arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
const values = fruits.values();
const entries = fruits.entries();
const entries2 = fruits.entries();

for (let x of keys) {
    console.log(x);
}

for (let x of values) {
    console.log(x);
}

for (let x of entries) {
    console.log(x);
}

for (let [key, value] of entries2) {
    console.log(`${key}: ${value}`);
}

// with() method as a safe way to update elements in an array without altering the original array.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");   // Update the element at index 2
console.log(myMonths);

// The ... operator expands an iterable (like an array) into more elements
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);