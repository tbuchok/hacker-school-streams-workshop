// > node tcp/01.js
// PIPING:
// > echo $'zebra\naardavark\nzebra\ntiger' | nc IP_ADDRESS 1337

var net = require('net')
  , path = require('path')
  , sort = require(path.join(process.cwd(), 'lib', 'sort'))
  , uniq = require(path.join(process.cwd(), 'lib', 'uniq'))
  , wc = require(path.join(process.cwd(), 'lib', 'wc'))
  , PORT = 1337
;

net.createServer({ allowHalfOpen: true }, function(c) {
  c
    .pipe(sort())
    .pipe(uniq())
    .pipe(wc())
    .pipe(c)
  ;
}).listen(PORT);
console.log('TCP server listening on', PORT);