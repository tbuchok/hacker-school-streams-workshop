// echo $'zebra\naardavark\nzebra\ntiger' | node unix.js
var path = require('path')
  , sort = require(path.join(process.cwd(), 'lib', 'sort'))
  , uniq = require(path.join(process.cwd(), 'lib', 'uniq'))
  , wc = require(path.join(process.cwd(), 'lib', 'wc'))
;

process.stdin
  .pipe(sort())
  .pipe(uniq())
  .pipe(wc())
  .pipe(process.stdout)
;