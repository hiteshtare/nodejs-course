//Events module (Node in-built)
var Emitter = require('events');
var eventsConfig = require('./config').events;//Majic string import

var emitr = new Emitter();


emitr.on(eventsConfig.GREET, function () {//Majic string usage
    console.log("Somewhere, someone said Hello :-)");
});

emitr.on(eventsConfig.GREET, function () {//Majic string usage
    console.log("Somewhere, someone said TGOD B-)");
});

console.log('Hello');
emitr.emit(eventsConfig.GREET);//Majic string usage

emitr.on('bye', function () {
    console.log("Good bye!");
});


emitr.emit('bye');


