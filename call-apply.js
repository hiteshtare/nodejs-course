var person = {
    name: 'Hitesh',
    greet: function (param1, param2) {
        console.log(`Hello ${this.name}! Params are ${param1} ${param2}`);
    }
}

//Call is used to substitute current object(this).Params are passed as comma separated
person.greet.call({ name: 'Trupti' }, 'Good', 'Night');
//#### Only Difference ####//
//Apply is used to substitute current object(this).Params are passed in array
person.greet.apply({ name: 'Sharda' }, ['Good', 'Morning']);