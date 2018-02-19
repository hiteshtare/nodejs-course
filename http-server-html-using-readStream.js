var http = require('http');
var fs = require('fs');

var filePath = `${__dirname}/html-template/index-static.htm`;

http.createServer(function (req, resp) {

    resp.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream(filePath).pipe(resp);

}).listen(1337, '127.0.0.1');