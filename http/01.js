// > node http/01.js
// PROXY:
// > curl -X GET IP_ADDRESS:1337?url=http://espn.com

var http = require('http')
  , fs = require('fs')
  , path = require('path')
  , proxy = require(path.join(process.cwd(), 'lib', 'proxy'))
  , PORT = 1337
;

http.createServer(function(req, res) {
  req
    .pipe(proxy())
    .pipe(res)
  ;
}).listen(PORT);
console.log('HTTP server listening on', PORT);