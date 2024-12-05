let x;
console.log(x);   // undefined
x = 10;
console.log(x);   // 10

const pi = 3.14;
// pi = 3.1415;  // TypeError: Assignment to constant variable.
console.log(pi);  // 3.14

var y = 20;
console.log(y);   // 20

// let x = 20;  // SyntaxError: Identifier 'x' has already been declared
var y = "Hello";
console.log(y);

{
    let a = 2;
    console.log(a);  // 2
}
// console.log(a);  // ReferenceError: a is not defined

{
    var b = 4;
    console.log(b);  // 4
}
console.log(b);  // 4