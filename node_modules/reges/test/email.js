var reges = require('../index');
var test = require('simple-test');

test('reges.url', function () {
  var emails = [
    'jack@gmail.com'
  ];

  emails.forEach(function (email) {
    test('is email: ' + email, function () {
      test.ok(email.match(reges.email));
    });
  });

  var notEmails = [
    'word'
  ];

  notEmails.forEach(function (notEmail) {
    test('not email: ' + notEmail, function () {
      test.notOk(notEmail.match(reges.email));
    });
  });
});
