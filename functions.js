function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(2));     // true
console.log(function (num) { return num % 2 !== 0 }());   // false
// Arrow function
console.log((num) => num % 2 === 0);    // true