'use strict';

//ES6 Syntax - Syntactic Sugar
class Person {
    constructor(pFirstName, pLastName) {
        this.pFirstName = pFirstName;
        this.pLastName = pLastName;
    }

    greet() {
        console.log(`Hello this is greeting : ${this.pFirstName} ${this.pLastName}.`);
    }
}
//ES6 Syntax - Syntactic Sugar

var trupti = new Person('Trupti', 'Tare');//First object
trupti.greet();

var sharda = new Person('Sharda', 'Tare');//Second object
sharda.greet();

console.log(trupti.__proto__);
console.log(sharda.__proto__);
console.log(trupti.__proto__ === sharda.__proto__);//Equality on Inheritance due to Prototyping

