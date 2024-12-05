/*
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
forEach - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

const fruits = ['apple', 'banana', 'cherry'];

// For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// For/in loop
for (let key in fruits) {
    console.log(key);
}

// For/of loop
for (let value of fruits) {
    console.log(value);
}

// forEach loop
fruits.forEach((value, index, array) => {
    console.log(`${index}: ${value}`);
});

// while loop
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

// do/while loop
let j = 0;
do {
    console.log(fruits[j]);
    j++;
} while (j < fruits.length);

