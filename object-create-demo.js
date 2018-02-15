var person = {
    firstName: '',
    lastName: '',
    greet: function () {
        console.log(`Hello! ${this.firstName} ${this.lastName}`);
    }
}

var hitesh = Object.create(person);//Cleaner way of creating object (Using new is another way)
hitesh.firstName = 'Hitesh';
hitesh.lastName = 'Tare';
hitesh.greet();

var trupti = Object.create(person);
trupti.firstName = 'Trupti';
trupti.lastName = 'Tare';
trupti.greet();