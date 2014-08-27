// > node http/03.js
// HEAVY FILE:
// > curl IP_ADDRESS:1337 > /tmp/file.mov

var http = require('http')
  , VIDEO_URL = 'http://buchok.s3.amazonaws.com/streams-workshop/video.mov'
  , PORT = 1337
;

http.createServer(function(req, res) {
  http.get(VIDEO_URL)
    .on('response', function(response) {
      response.pipe(res)
    })
  ;
}).listen(PORT);
console.log('HTTP server listening on', PORT);