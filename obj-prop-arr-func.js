//object and properties
var obj = {
    prop1: 'Hello'
};

console.log(obj.prop1);
console.log(obj['prop1']);

var prop_name = 'prop1';
console.log(obj[prop_name]);

//array and functions
var arr = [];

arr.push(function () {
    console.log("Hello greet1");
});
arr.push(function () {
    console.log("Hello greet2");
});
arr.push(function () {
    console.log("Hello greet3");
});

arr.forEach(function (item) {
    item();
});
