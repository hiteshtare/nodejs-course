var fs = require('fs');
var zlib = require('zlib');

var readPath = `${__dirname}/file-stream/greet.txt`;
var writePath = `${__dirname}/file-stream/greetcopy.txt`;
var zipPath = `${__dirname}/file-stream/greetcopy.txt.gz`;

var readable = fs.createReadStream(readPath);
var writable = fs.createWriteStream(writePath);
var compressed = fs.createWriteStream(zipPath);

var gZip = zlib.createGzip();

//Readable stream is piped to Writable stream
readable.pipe(writable);

//Readable stream is piped to gZip stream (only Readable) which is again piped to Writable (compressed)  stream
readable.pipe(gZip).pipe(compressed);