const letters = new Set(['a', 'b', 'c', 'd', 'e']);
const letters2 = new Set();
letters2.add('a');
letters2.add('b');
letters2.add('c');
letters2.add('d');
letters2.add('e');

console.log(letters);
console.log(typeof letters);    // object
console.log(letters instanceof Set);    // true
console.log(letters.size);
console.log(letters.has('d'));    // true
console.log(letters.delete('d'));

letters.forEach((value) => {
    console.log(value);
});

for (let x of letters) {
    console.log(x);
}