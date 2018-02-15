var Emitter = require('events');//Node module

var emitr = new Emitter();

//Event Listener for greet
emitr.on('greet', function () {
    console.log("Somewhere, someone said Hello :-)");
});
emitr.on('greet', function () {
    console.log("Somewhere, someone said TGOD B-)");
});
//Event Listener for greet

console.log('Hello');
emitr.emit('greet');//Event Emitter

//Event Listener for bye
emitr.on('bye', function () {
    console.log("Good bye!");
});


emitr.emit('bye');//Event Emitter


