var fs = require('fs');

var filePath = `${__dirname}/json-require-demo/greet.txt`;
var readGreetSync = fs.readFileSync(filePath);
console.log(readGreetSync);

var readGreetAsync = fs.readFile(filePath, 'utf8', function (err, data) {
    console.log(`File Read in an Async Manner! Data : ${data}`);
});

console.log("Done");
