/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/

console.log(Math.PI);

/*
Number to Integer
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

console.log(Math.round(4.7)); // returns 5
console.log(Math.ceil(4.4)); // returns 4
console.log(Math.floor(4.7)); // returns 4
console.log(Math.trunc(4.7)); // returns 4

console.log(Math.pow(8, 2));      // returns 64
console.log(Math.sqrt(64));       // returns 8
console.log(Math.abs(-4.7));      // returns 4.7

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random());
// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));
// Returns a random integer from 0 to 10
console.log(Math.floor(Math.random() * 11));
// Returns a random integer from 0 to 99
console.log(Math.floor(Math.random() * 100));
// Returns a random integer from 0 to 100
console.log(Math.floor(Math.random() * 101));
// Returns a random integer from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// A proper random function
// This JavaScript function always returns a random number between min (included) and max (excluded)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// This JavaScript function always returns a random number between min and max (both included)
function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt2(1, 10));


