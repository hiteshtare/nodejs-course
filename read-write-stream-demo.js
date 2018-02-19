var fs = require('fs');

var readPath = `${__dirname}/file-stream/greet.txt`;
var writePath = `${__dirname}/file-stream/greetcopy.txt`;

//encoding type and highWaterMark which denotes buffer size in bytes
var readable = fs.createReadStream(readPath, { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(writePath);

//Event fired when data is being read in chunks
readable.on('data', function (chunk) {
    console.log(chunk);
    writable.write(chunk);
});