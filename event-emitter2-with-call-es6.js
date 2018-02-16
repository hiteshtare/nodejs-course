'use strict';

class Person {
    constructor() {
        this.firstName = "Hitesh";
        this.lastName = "Tare";
    }

    greet() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

var person = new Person();
person.greet();

class Hobbies extends Person {
    constructor() {
        super();
        this.name = "Pianist";
    }
}

var hobbies = new Hobbies();
hobbies.greet();
console.log(hobbies.name);
console.log(hobbies.firstName);