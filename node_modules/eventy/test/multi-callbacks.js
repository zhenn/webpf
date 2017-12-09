var eventy = typeof document === 'object' ? require('eventy') : require('../index');
var test = require('simple-test');

var object = eventy({});

test('eventy.on will register multiple callbacks', function (done) {
  function onChange1() {
    console.log('onChange1');
  }

  function onChange2() {
    console.log('onChange2');
    done();
  }

  object.on('change', onChange1);
  object.on('change', onChange2);

  object.trigger('change');
});
