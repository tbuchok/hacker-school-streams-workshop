// > ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -f 2
// > node http.js
// > curl <IP_ADDRESS>:1337
// > echo $'zebra\naardavark\nzebra\ntiger' | curl -X POST --data-binary @- <IP_ADDRESS>:1337
// > curl -X GET localhost:1337?url=http://espn.com

var http = require('http')
  , url = require('url')
  , querystring = require('querystring')
  , path = require('path')
  , sort = require(path.join(process.cwd(), 'lib', 'sort'))
  , uniq = require(path.join(process.cwd(), 'lib', 'uniq'))
  , wc = require(path.join(process.cwd(), 'lib', 'wc'))
  , proxy = require(path.join(process.cwd(), 'lib', 'proxy'))
  , PORT = 1337
;

http.createServer(function(req, res) {
  req
    .pipe(sort()).pipe(uniq()).pipe(wc()).pipe(res);
    // .pipe(proxy()).pipe(res);
  ;
}).listen(PORT);
console.log('HTTP server listening on', PORT);