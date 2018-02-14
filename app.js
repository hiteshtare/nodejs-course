var Emitter = require('./emitter');

var emitr = new Emitter();

emitr.on('greet', function () {
    console.log("Somewhere, someone said Hello :-)");
});

emitr.on('greet', function () {
    console.log("Somewhere, someone said TGOD B-)");
});

console.log('Hello');
emitr.emit('greet');

emitr.on('bye', function () {
    console.log("Good bye!");
});


emitr.emit('bye');


