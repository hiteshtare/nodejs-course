var EventEmitter = require('events');//Node module
var util = require('util');//Node module

//Constructor function
function Greetr() {
    this.greeting = `Hello Greetr`;
}

//Inheritance constr & superConstr
util.inherits(Greetr, EventEmitter);

//Prototype function
Greetr.prototype.greet = function (data) {//passing data to emit
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data);//First emitter
}

//Creates a new object
var greeter1 = new Greetr();
greeter1.on('greet', function (data) {//First event listener for First emitter
    console.log(`Someone, Somewhere greeted Me :-) ${data} - greet`);
});
greeter1.on('greet', function () {//Second event listener for First emitter
    console.log(`Someone, Somewhere greeted Me Again :-) - greet`);
});

greeter1.on('greet2', function () {//First event listener for second emitter
    console.log(`Someone, Somewhere greeted Me From 2 :-) - greet2`);
});

greeter1.greet('Hitesh');//Function  call

greeter1.emit('greet2');//Second emitter