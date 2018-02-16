function greet(callback) {//Functions are first class
    console.log(`Hello`);

    data = "Hitesh";
    callback(data);//This function is callback as it will be executed after greet has finish doing 
}

greet(function (data) {
    console.log(`This is callback function 1 ${data}`);
});

greet(function (data) {
    console.log(`This is callback function 2 ${data}`);
});

