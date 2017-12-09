var eventy = require('../index');
var test = require('simple-test');
var promisy = require('promisy')();

promisy(function (next) {
  test('eventy can be used standalone', function () {
    var eventEngine = new eventy;

    test.ok(eventEngine.on);
    test.ok(eventEngine.off);
    test.ok(eventEngine.emit);
    test.ok(eventEngine.trigger);
    next();
  });
}).then(function (next) {
  test('eventy can inject an event engine to an object', function () {
    var object = {};

    eventy(object);
    test.ok(object.on);
    test.ok(object.off);
    test.ok(object.emit);
    test.ok(object.trigger);
    next(object);
  });
}).then(function (next, object) {
  function doThrow() {
    throw 'error';
  }

  test('eventy.on', function () {
    test.ok(object.on('throw', doThrow));
  });

  test('eventy.triggerSync', function () {
    test.throw(function () {
      object.triggerSync('throw');
    });
  });

  test('eventy.trigger', function (done) {
    object.on('async', function () {
      console.log('async');
      done();
    });

    object.trigger('async');
  });

  test('eventy.off', function () {
    object.off('throw', doThrow);

    test.notThrow(function () {
      object.triggerSync('throw');
    });
  })
});
