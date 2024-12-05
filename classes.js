/*
Syntax
class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
}
*/
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let car1 = new Car("Ford", 2014);
let car2 = new Car("Audi", 2019);

console.log(car1);
console.log(car2);
console.log(car1.year);
console.log(car1.age());

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello ${this.name}`;
    }

    static staticVariable = "I am a static variable";

    static staticMethod() {
        return "I am a static method";
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    greet() {
        return `Hello ${this.name} from grade ${this.grade}`;
    }
}

const person = new Person("Waqar Ali Siyal", 24);
console.log(person.greet());
console.log(Person.staticVariable);
console.log(Person.staticMethod());

const student = new Student("Waqar Ali Siyal", 24, "A");
console.log(student.greet());
console.log(Student.staticVariable);
console.log(Student.staticMethod());