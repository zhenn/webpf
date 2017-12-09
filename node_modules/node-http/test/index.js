var Http = require('../index');
var test = require('simple-test');

test('GET', function (done) {
  var http = new Http;

  http.GET('http://www.baidu.com', function (response) {
    console.log('response');
    done();
  }, function (e) {
    console.log('error', e);
  });

  http.on('buffer', function (buffer) {
    console.log('buffer', buffer);
  });

});
