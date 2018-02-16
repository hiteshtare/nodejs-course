var util = require('util');

function Person() {
    this.firstName = "Hitesh";
    this.lastName = "Tare";
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

var person = new Person();
person.greet();


function Hobbies() {
    Person.call(this);
    this.name = "Pianist";
}

util.inherits(Hobbies, Person);

var hobbies = new Hobbies();
hobbies.greet();
console.log(hobbies.name);
console.log(hobbies.firstName);


