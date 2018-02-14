var greet = function () {
    console.log("Hello NodeJS!");
};

//special function to expose needed code outside this function
module.exports = greet;
