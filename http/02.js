// > node http/02.js
// HEAVY FILE:
// > curl IP_ADDRESS:1337 > /tmp/file.mov

var http = require('http')
  , fs = require('fs')
  , path = require('path')
  , VIDEO_FILE_PATH = '/Users/tom/Desktop/backbone-plugin.mov'
  , PORT = 1337
;

http.createServer(function(req, res) {
  fs.createReadStream(VIDEO_FILE_PATH).pipe(res);
}).listen(PORT);
console.log('HTTP server listening on', PORT);