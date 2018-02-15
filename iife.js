var firstName = "Trupti";

//Immediately Invoked Function Expression (IIFE)
(function func1(lastName) {
    var firstName = "Hitesh";
    console.log(firstName);
    console.log(lastName);
}("Tare"));//Function invoked automatically on import (implicitly called)

console.log(firstName);