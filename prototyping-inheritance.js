//Object with prop and method
var employee = {
    firstName: 'Hitesh',
    lastName: 'Tare',
    greet: function () {
        console.log(`Hello, ${this.firstName} ${this.lastName}`)
    }
};

employee.greet();
console.log(employee.firstName);//Accessing property using dot operator on object
console.log(employee['firstName']);//Accessing property using string name

//Constructor function
function Person(pFirstName, pLastName) {
    this.pFirstName = pFirstName;
    this.pLastName = pLastName;
}

var trupti = new Person('Trupti', 'Tare');//First object
console.log(trupti.pFirstName);

Person.prototype.greet = function () {//Prototype function
    console.log(`Hello this is greeting : ${this.pFirstName} ${this.pLastName}.`);
}

trupti.greet();

var sharda = new Person('Sharda', 'Tare');//Second object
sharda.greet();

console.log(trupti.__proto__);
console.log(sharda.__proto__);
//Equality on Inheritance due to Prototyping on Object References
console.log(trupti.__proto__ === sharda.__proto__);

