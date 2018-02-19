var http = require('http');
var fs = require('fs');

var filePath = `${__dirname}/html-template/index-static.htm`;

http.createServer(function (req, resp) {

    if (req.url === '/') {
        resp.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(filePath).pipe(resp);
    }

    if (req.url === '/api') {
        resp.writeHead(200, { 'content-type': 'application/json' });

        var object = {
            'firstName': 'Hitesh',
            'lastName': 'Tare'
        }
        resp.end(JSON.stringify(object));
    }

    resp.writeHead(404);
    resp.end();

}).listen(1337, '127.0.0.1');