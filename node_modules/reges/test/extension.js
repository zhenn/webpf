var reges = require('../index');
var test = require('simple-test');

test('reges.extension', function () {
  var extensions = [
    'favicon.ico',
    'index.html',
    'Array.prototype.js'
  ];

  extensions.forEach(function (extension) {
    test.ok(extension.match(reges.extension));
    test.ok(reges.matchExtension(extension));
    console.log(reges.matchExtension(extension))
  });
});

test('not reges.extension', function () {
  var notExtensions = [
    'word'
  ];

  notExtensions.forEach(function (notExtension) {
    test.notOk(notExtension.match(reges.extension));
    test.notOk(reges.matchExtension(notExtension));
  });
});
