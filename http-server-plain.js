var http = require('http');

http.createServer(function (req, resp) {

    resp.writeHead(200, { 'content-type': 'text/plain' });
    resp.end('Hello World \n Hitesh');

}).listen(1337, '127.0.0.1');