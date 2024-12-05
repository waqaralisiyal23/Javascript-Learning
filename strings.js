let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

let str1 = "It's alright";
let str2 = 'He is called "Johnny"';
let str3 = 'It\'s alright';
let str4 = "He is called \"Johnny\"";
let str5 = "The character \\ is called backslash.";

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);

/*
Template Strings
Templates were introduced with ES6 (JavaScript 2016).
Templates are strings enclosed in backticks (`This is a template string`).
Templates allow single and double quotes inside a string.
Templates allow multi-line strings.
*/

let str6 = `He's often called "Johnny"`;
console.log(str6);
let str7 = `Hello
Second Line
Third Line
World!`;
console.log(str7);

let text = "Hello World!";
let textWithGap = "     Hello World!     ";

console.log(text.length);   // 12
console.log(text.toUpperCase());    // HELLO WORLD!
console.log(text.toLowerCase());    // hello world!
console.log(text.at(0));    // H
console.log(text.charAt(0));    // H
console.log(text.charCodeAt(0));    // 72
console.log(text[0]);   // H
console.log(text.concat(" Good Morning!"));    // Hello World! Good Morning!
console.log(textWithGap.trimStart());   // Hello World!
console.log(textWithGap.trimEnd());  //      Hello World!
console.log(textWithGap.trim());    // Hello World!
console.log(text.padStart(20, "123"));    // 12312312Hello World!
console.log(text.padEnd(20, "123"));    // Hello World!12312312
console.log(text.repeat(3));   // Hello World!Hello World!Hello World!
console.log(text.replace("World", "Universe"));   // Hello Universe!
console.log(text.replaceAll("o", "0"));
console.log(text.slice(4));         // o World!
console.log(text.slice(4, 7));      // o W
console.log(text.slice(-4));     // rld!
console.log(text.slice(-4, -1));     // rld
console.log(text.substring(4));         // o World!
console.log(text.substring(4, 7));      // o W
let textArray = text.split(" ");
console.log(textArray);

// String Search Methods
console.log(text.indexOf("World"));   // 6
console.log(text.lastIndexOf("o"));   // 7
console.log(text.search("World"));    // 6

text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));     // Perform a search for "ain"
console.log(text.match(/ain/));     // Perform a search for "ain"
console.log(text.match(/ain/g));    // Perform a global search for "ain"
console.log(text.match(/ain/gi));   // Perform a global, case-insensitive search for "ain"

let iterator = text.matchAll("ain");    // Perform a search for "ain"
for (const match of iterator) {
    console.log(match);
}
iterator = text.matchAll(/ain/g);   // Perform a global search for "ain"
for (const match of iterator) {
    console.log(match);
}
iterator = text.matchAll(/ain/gi);  // Perform a global, case-insensitive search for "ain"
for (const match of iterator) {
    console.log(match);
}

console.log(text.includes("ain"));   // true
console.log(text.startsWith("The"));   // true
console.log(text.endsWith("plain"));   // true

