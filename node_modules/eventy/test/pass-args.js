var eventy = typeof document === 'object' ? require('eventy') : require('../index');
var test = require('simple-test');

var object = eventy({});

test('eventy.trigger will pass arguments to the callbacks', function (done) {
  object.on('async', function (a, b) {
    test.eq(a, 'a');
    test.eq(b, 'b');
    done();
  });

  object.trigger('async', 'a', 'b');
});

test('eventy.triggerSync will pass arguments to the callbacks', function () {
  object.on('sync', function (a, b) {
    test.eq(a, 'a');
    test.eq(b, 'b');
  });

  object.triggerSync('sync', 'a', 'b');
});
