var Emitter = require('./emitter');//Node module

var emitr = new Emitter();

//Event Listener for greet
emitr.on('greet', function () {
    console.log("Somewhere, someone said Hello :-) - greet");
});
emitr.on('greet', function () {
    console.log("Somewhere, someone said TGOD B-) - greet");
});
//Event Listener for greet

console.log('Hello');
emitr.emit('greet');//Event Emitter

//Event Listener for bye
emitr.on('bye', function () {
    console.log("Good bye! - bye");
});


emitr.emit('bye');//Event Emitter


