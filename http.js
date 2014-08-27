// > ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -f 2
// > node http.js
// PIPING:
// > echo $'zebra\naardavark\nzebra\ntiger' | curl -X POST --data-binary @- IP_ADDRESS:1337
// PROXY:
// > curl -X GET IP_ADDRESS:1337?url=http://espn.com
// HEAVY FILE:
// > curl IP_ADDRESS:1337 > /tmp/file.mov

var http = require('http')
  , fs = require('fs')
  , path = require('path')
  , sort = require(path.join(process.cwd(), 'lib', 'sort'))
  , uniq = require(path.join(process.cwd(), 'lib', 'uniq'))
  , wc = require(path.join(process.cwd(), 'lib', 'wc'))
  , proxy = require(path.join(process.cwd(), 'lib', 'proxy'))
  , VIDEO_URL = 'http://buchok.s3.amazonaws.com/streams-workshop/video.mov'
  , VIDEO_FILE_PATH = '/Users/tom/Desktop/backbone-plugin.mov'
  , PORT = 1337
;

http.createServer(function(req, res) {
  req
    .pipe(sort()).pipe(uniq()).pipe(wc()).pipe(res);
    // .pipe(proxy()).pipe(res);
    // fs.createReadStream(VIDEO_FILE_PATH).pipe(res);
    // http.get(VIDEO_URL).on('response', function(response) { response.pipe(res) });
  ;
}).listen(PORT);
console.log('HTTP server listening on', PORT);