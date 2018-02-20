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

module.exports = class Hobbies extends Person {
    constructor() {
        super();
        this.name = "Pianist";
    }
}