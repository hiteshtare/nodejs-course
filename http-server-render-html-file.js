var http = require('http');
var fs = require('fs');

var filePath = `${__dirname}/html-template/index-static.htm`;

http.createServer(function (req, resp) {

    var readHtml = fs.readFileSync(filePath);

    resp.writeHead(200, { 'content-type': 'text/html' });
    resp.end(readHtml);

}).listen(1337, '127.0.0.1');