// Create web server
// Create a web server that listens on port 3000 and serves the contents of comments.html when someone visits http://localhost:3000/comments. The file is located in the same directory as comments.js.

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('./comments.html').pipe(res);
}).listen(3000);