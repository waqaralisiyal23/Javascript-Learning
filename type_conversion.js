/*
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
*/

/*
Converting Strings to Numbers
The global method Number() converts a variable (or a value) into a number.
A numeric string (like "3.14") converts to a number (like 3.14).
An empty string (like "") converts to 0.
A non numeric string (like "John") converts to NaN (Not a Number).

These will convert:
Number("3.14")
Number(Math.PI)
Number(" ")
Number("")

These will not convert:
Number("99 88")
Number("John")
Note: If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number)

Number Methods

Method	        Description
Number()	    Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	    Parses a string and returns an integer
*/
console.log(Number("3.14"));    // 3.14
console.log(Number(" "));   // 0
console.log(Number(""));    // 0
console.log(Number("John"));    // NaN

console.log(parseFloat("3.14"));    // 3.14
console.log(parseInt("3.14"));    // 3

// The unary + operator can be used to convert a variable to a number
let y = "5";
let x = +y;     // x = 5, y = "5"
console.log(typeof x);    // number


/*
Converting Numbers to Strings
The global method String() can convert numbers to strings.
It can be used on any type of numbers, literals, variables, or expressions.

More Methods

Method	            Description
toExponential()	    Returns a string, with a number rounded and written using exponential notation.
toFixed()	        Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	    Returns a string, with a number written with a specified length
*/
let a = 3.14;
console.log(a.toString());  // "3.14"
console.log(a.toFixed(1));  // "3.1"
console.log(a.toFixed(0));    // "3"
console.log(a.toPrecision(2));    // "3.1"
console.log(a.toPrecision(1));    // "3"


/*
Converting Dates to Numbers
The global method Number() can be used to convert dates to numbers.
The date method getTime() does the same.
*/
let d = new Date("2024-12-4");
console.log(Number(d));   // 1733252400000
console.log(d.getTime());    // 1733252400000


/*
Converting Dates to Strings
The global method String() can convert dates to strings.
The Date method toString() does the same.
*/
console.log(String(d));     // "Wed Dec 04 2024 00:00:00 GMT+0500 (Pakistan Standard Time)"
console.log(d.toString());    // "Wed Dec 04 2024 00:00:00 GMT+0500 (Pakistan Standard Time)"


/*
Converting Booleans to Numbers and Booleans to Strings
The global method Number() can also convert booleans to numbers
The global method String() can convert booleans to strings
The Boolean method toString() does the same
*/
console.log(Number(true));    // 1
console.log(Number(false));    // 0
console.log(String(true));   // "true"
console.log(false.toString());    // "false"

