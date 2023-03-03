var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': "text/html"
    });
    res.end('<h1>hello world</h1>');
});

server.listen(9090, function() {
    console.log('http server running on 9090');
});