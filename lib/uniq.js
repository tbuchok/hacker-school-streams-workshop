var Transform = require('stream').Transform
  , util = require('util')
;

util.inherits(Uniq, Transform);
function Uniq() {
  Transform.call(this);
  this.buffer = [];
}
Uniq.prototype._transform = function(chunk, enc, next) {
  this.buffer.push(chunk);
  next();
};

Uniq.prototype._flush = function(done) {
  var result = Buffer
                .concat(this.buffer)
                .toString()
                .split('\n')
                .filter(function(w, i, a) { return a.indexOf(w) === i })
                .join('\n')
              ;
  this.push(result);
  done();
};

module.exports = function() {
  return new Uniq;
}

if (require.main !== module)
  return;

process.stdin.pipe(new Uniq).pipe(process.stdout);