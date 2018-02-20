//user defined function
function greet() {
    console.log('Hi! from greet');
}

greet();

/*funtions are first class i.e. You can used them as string or number 
to pass them to a function or pushed into an array*/
function logGreet(fn) {
    fn();
}

logGreet(greet);

//funtion expression anonymous(without name)
var mygreet = function () {
    console.log("Hello Hitesh! from mygreet");
}

mygreet();

//it's first class
logGreet(mygreet);

//use function expression on the fly
logGreet(function () {
    console.log("Holla Hitesh! from on-the-fly");
});