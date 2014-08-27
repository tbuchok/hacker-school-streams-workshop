var Transform = require('stream').Transform
  , util = require('util')
;

util.inherits(Sort, Transform);
function Sort() {
  Transform.call(this);
  this.buffer = [];
}
Sort.prototype._transform = function(chunk, enc, next) {
  this.buffer.push(chunk);
  next();
};

Sort.prototype._flush = function(done) {
  var result = Buffer
                .concat(this.buffer)
                .toString()
                .split('\n')
                .filter(function(w) { return w.length > 0 })
                .sort()
                .join('\n')
              ;
  this.push(result);
  done();
};

module.exports = function() {
  return new Sort;
}

if (require.main !== module)
  return;

process.stdin.pipe(new Sort).pipe(process.stdout);