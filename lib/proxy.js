var http = require('http')
  , url = require('url')
  , querystring = require('querystring')
  , Duplex = require('stream').Duplex
  , util = require('util')
;

util.inherits(Proxy, Duplex);
function Proxy() {
  var self = this;
  Duplex.call(self);
  self.on('pipe', function(source) {
    console.log(source.url);
    var uri = url.parse(source.url)
      , params = querystring.parse(uri.query)
    ;
    var get = function(url) {
      http.get(url)
        .on('response', function(response) {
          if (response.statusCode === 302 ||
              response.statusCode === 301)
            return get(response.headers.location);
          response
            .on('data', self.push.bind(self))
            .on('end', self.push.bind(self, null))
          ;
        })
        .on('end', self.end)
    };
    get(params.url || 'http://www.example.com');
  });
}

Proxy.prototype._read = function() { /* not implemented */ }
Proxy.prototype._write = function(chunk, enc, next) {
  /* not expecting writes */
  next();
};

module.exports = function() { 
  return new Proxy;
}