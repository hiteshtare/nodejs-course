function Greetr() {
    this.greeting = "Hello! from Greeting 3";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();//Create a new object on export