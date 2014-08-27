// > ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -f 2
// > node http/00.js
// PIPING:
// > echo $'zebra\naardavark\nzebra\ntiger' | curl -X POST --data-binary @- IP_ADDRESS:1337

var http = require('http')
  , path = require('path')
  , sort = require(path.join(process.cwd(), 'lib', 'sort'))
  , uniq = require(path.join(process.cwd(), 'lib', 'uniq'))
  , wc = require(path.join(process.cwd(), 'lib', 'wc'))
  , PORT = 1337
;

http.createServer(function(req, res) {
  req
    .pipe(sort())
    .pipe(uniq())
    .pipe(wc())
    .pipe(res)
  ;
}).listen(PORT);
console.log('HTTP server listening on', PORT);