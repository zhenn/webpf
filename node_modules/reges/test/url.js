var reges = require('../index');
var test = require('simple-test');

test('reges.url', function () {
  var urls = [
    'http://google.com',
    'http://www.google.com',
    'https://google.com',
    'ftp://12.53.2.0/name.ext'
  ];

  urls.forEach(function (url) {
    test('is url: ' + url, function () {
      test.ok(url.match(reges.url));
    });
  });

  var notUrls = [
    'word'
  ];

  notUrls.forEach(function (notUrl) {
    test('not url: ' + notUrl, function () {
      test.notOk(notUrl.match(reges.url));
    });
  });
});
