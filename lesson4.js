var through = require('through2');
var information = '';

var stream = through(function(buffer) {
  this.queue(buffer.toString().toUpperCase());
});
process.stdin.pipe(stream).pipe(process.stdout);
