var Transform = require('stream').Transform
  , util = require('util')
;

util.inherits(WC, Transform);
function WC() {
  Transform.call(this);
  this.buffer = [];
}
WC.prototype._transform = function(chunk, enc, next) {
  this.buffer.push(chunk);
  next();
};

WC.prototype._flush = function(done) {
  var result = Buffer
                .concat(this.buffer)
                .toString()
                .split('\n')
                .length
              ;
  this.push('\t'+result + '\n');
  done();
};

module.exports = function() {
  return new WC;
}

if (require.main !== module)
  return;

process.stdin.pipe(new WC).pipe(process.stdout);