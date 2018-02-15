//Pattern 3
function Greetr() {
    this.greeting = "Hello! from Greeting 3";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();//Creates a new object on return