const person = {
    firstName: "Waqar Ali",
    lastName: "Siyal",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

person.age = 24;

console.log(person.firstName);
console.log(person.lastName);
console.log(person['age']);
console.log(person.fullName());
console.log(person);

delete person.age;
console.log(person);
delete person['fullName'];
console.log(person);

const keysArray = Object.keys(person);
const valuesArray = Object.values(person);
console.log(keysArray);
console.log(valuesArray);

for (let [key, value] of Object.entries(person)) {
    console.log(key + ": " + value);
}

let personStr = JSON.stringify(person);
console.log(personStr); // Convert object to JSON string
let personObj = JSON.parse(personStr);
console.log(personObj); // Convert JSON string to object

// Object Constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car("Toyota", "Corolla", 2015);
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1);