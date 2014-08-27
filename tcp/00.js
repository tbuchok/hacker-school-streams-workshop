// > ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -f 2
// > node tcp/00.js
// ECHO:
// > nc IP_ADDRESS 1337

var net = require('net')
  , PORT = 1337
;

net.createServer({ allowHalfOpen: true }, function(c) {
  c.pipe(c);
}).listen(PORT);
console.log('TCP server listening on', PORT);