var greetings = require('./greetings');

var greet = function () {
    console.log(greetings.en);//Accessing the module using dot operator
}

module.exports = greet;