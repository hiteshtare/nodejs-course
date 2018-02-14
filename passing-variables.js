//pass by value
function func1(b) {
    b = 2;
}
var a = 1;
console.log(a);
func1(a);
console.log(a);

//pass by reference
function func2(d) {
    d.prop1 = function () { };
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
console.log(c);
func2(c);
console.log(c);
