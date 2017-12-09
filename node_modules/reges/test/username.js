var reges = require('../index');
var test = require('simple-test');

test('reges.username', function () {
  var usernames = [
    'shallker',
    'jack',
    'jack_wang',
    'jack-wang'
  ];

  usernames.forEach(function (username) {
    test('is username: ' + username, function () {
      test.ok(username.match(reges.username));
    });
  });

  var notUsernames = [
    'a*',
    ',as'
  ];

  notUsernames.forEach(function (notUsername) {
    test('not username: ' + notUsername, function () {
      test.notOk(notUsername.match(reges.username));
    });
  });
});
