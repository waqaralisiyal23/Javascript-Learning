/*
Object	                                    Map
Not directly iterable	                    Directly iterable
Do not have a size property	                Have a size property
Keys must be Strings (or Symbols)	        Keys can be any datatype
Keys are not well ordered	                Keys are ordered by insertion
Have default keys	                        Do not have default keys
*/

const fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['cherries', 1000],
]);

const fruits2 = new Map();
fruits2.set('apples', 500);
fruits2.set('bananas', 300);
fruits2.set('cherries', 1000);

console.log(fruits);
console.log(typeof fruits);    // object
console.log(fruits instanceof Map);    // true
console.log(fruits.size);
console.log(fruits.get('apples'));
console.log(fruits.delete('apples'));

fruits.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

