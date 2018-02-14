function Greetr() {
    this.greeting = "Hello! from Greeting 4";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greetr;//Returns a constructor function