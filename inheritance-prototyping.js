var employee = {
    firstName: 'Hitesh',
    lastName: 'Tare',
    greet: function () {
        console.log(`Hello, ${this.firstName} ${this.lastName}`)
    }
};

employee.greet();
console.log(employee.firstName);
console.log(employee['firstName']);

function Person(pFirstName, pLastName) {
    this.pFirstName = pFirstName;
    this.pLastName = pLastName;
}

var trupti = new Person('Trupti', 'Tare');
console.log(trupti.pFirstName);

Person.prototype.greet = function () {
    console.log(`Hello this is greeting : ${this.pFirstName} ${this.pLastName}.`);
}

trupti.greet();


var sharda = new Person('Sharda', 'Tare');
sharda.greet();

console.log(trupti.__proto__);
console.log(sharda.__proto__);
console.log(trupti.__proto__ === sharda.__proto__);

