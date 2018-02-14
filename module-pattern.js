//Pattern 1
var greet1 = require('./greet1');
greet1();
//Pattern 1

//Pattern 2
// var greet2 = require('./greet2');
// greet2.greet();
var greet2 = require('./greet2').greet;
greet2();
//Pattern 2

//Pattern 3
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed to new Greet!";//Pass by Reference

var greet3new = require('./greet3');
greet3new.greet();
greet3new.greeting = "Changed to new new Greet!";//Pass by Reference

var greet3newnew = require('./greet3');
greet3newnew.greet();
//Pattern 3

//Pattern 4
var Greetr = require('./greet4');
var grt4 = new Greetr();
grt4.greet();
grt4.greeting = "Changed to Greet!";

var grt5 = new Greetr();
grt5.greet();
//Pattern 4

//Pattern 5
var greet5 = require('./greet5').greet;
greet5();
//Pattern 5