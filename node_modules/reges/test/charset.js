var reges = require('../index');
var test = require('simple-test');

test('reges.charset', function () {
  var charsets = [
    'Content-Type: text/html; charset=utf-8',
    '<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">',
    '<meta http-equiv="content-type" content="text/html; charset=UTF-8">',
    "<meta charset='utf-8'>"
  ];

  charsets.forEach(function (charset) {
    test('is charset: ' + charset, function () {
      test.ok(charset.match(reges.charset));
      test.ok(reges.matchCharset(charset));
      console.log(reges.matchCharset(charset));
    });
  });

  var notCharsets = [
    'word'
  ];

  notCharsets.forEach(function (notCharset) {
    test('not charset: ' + notCharset, function () {
      test.notOk(notCharset.match(reges.charset));
      test.notOk(reges.matchCharset(notCharset));
    });
  });
});
