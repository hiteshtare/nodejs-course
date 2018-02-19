var http = require('http');
var fs = require('fs');

var filePath = `${__dirname}/html-template/index-dynamic.htm`;

http.createServer(function (req, resp) {

    var readHtml = fs.readFileSync(filePath, 'utf8');

    var message = "Hello Node - Hitesh";
    readHtml = readHtml.replace('{Message}', message);

    resp.writeHead(200, { 'content-type': 'text/html' });
    resp.end(readHtml);

}).listen(1337, '127.0.0.1');