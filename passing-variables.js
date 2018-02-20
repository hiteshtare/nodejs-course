//pass by value (Supported by primitive types eg.number, string & boolean)
function func1(b) {
    b = 2;
}
var a = 1;
console.log(a);
func1(a);
console.log(a);//Value of a remains unchanged due to difference location references

//pass by reference (Supported by non-primitive types eg.objects & arrays)
function func2(d) {
    d.prop1 = function () { };
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
console.log(c);
func2(c);
console.log(c);//Value of c changed due to same location references
