var fs = require('fs');

var readPath = `${__dirname}/file-stream/greet.txt`;
var writePath = `${__dirname}/file-stream/greetcopy.txt`;

var readable = fs.createReadStream(readPath);

var writable = fs.createWriteStream(writePath);

//Read stream is piped to Writable stream
readable.pipe(writable);