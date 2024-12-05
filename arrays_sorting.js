const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the elements of fruits
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
fruits.reverse(); // Reverses the order of the elements of fruits
console.log(fruits); // Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted(); // Sorts the elements of months
console.log(sorted); // Output: [ 'Apr', 'Feb', 'Jan', 'Mar' ]
const reversed = sorted.toReversed(); // Reverses the order of the elements of months
console.log(reversed); // Output: [ 'Mar', 'Jan', 'Feb', 'Apr' ]


/*
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function
*/
let points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // Sorts the elements of points in ascending order
console.log(points); // Output: [ 1, 5, 10, 25, 40, 100 ]
points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a); // Sorts the elements of points in descending order
console.log(points); // Output: [ 100, 40, 25, 10, 5, 1 ]

points = [40, 100, 1, 5, 25, 10];
console.log(Math.min(...points)); // Output: 1
console.log(Math.min.apply(null, points)); // Output: 1
console.log(Math.max(...points)); // Output: 100
console.log(Math.max.apply(null, points)); // Output: 100

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
cars.sort((a, b) => a.year - b.year); // Sorts the elements of cars by year in ascending order
console.log(cars);