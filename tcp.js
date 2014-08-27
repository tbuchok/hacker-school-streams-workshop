// > nc localhost 1337
// > echo $'zebra\naardavark\nzebra\ntiger' | nc localhost 1337

var net = require('net')
  , path = require('path')
  , sort = require(path.join(process.cwd(), 'lib', 'sort'))
  , uniq = require(path.join(process.cwd(), 'lib', 'uniq'))
  , wc = require(path.join(process.cwd(), 'lib', 'wc'))
  , stream = sort().pipe(uniq()).pipe(wc())
  , PORT = 1337
;

net.createServer({ allowHalfOpen: true }, function(c) {
  c
    // .pipe(sort()).pipe(uniq()).pipe(wc())
    .pipe(c);
}).listen(PORT);
console.log('echo server listening on', PORT);