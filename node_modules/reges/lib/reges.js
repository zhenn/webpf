/*
  A list of regular expression collection.
  Starts with dummy.
*/

exports.url = /^(http|https|ftp)+:\/\/\S+/;

exports.http = /^http:\/\/\S+/;

exports.https = /^https:\/\/\S+/;

exports.email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

exports.username = /^[a-z0-9_-]{3,18}$/;

exports.password = /^[a-z0-9_-]{3,18}$/;

exports.chinese = /[\u4e00-\u9fa5]/;

exports.contentType = /content-type/i;

exports.matchContentType = function (str) {
  var match = str.match(exports.contentType);

  return match ? match[0] : null;
}

exports.charset = /charset=('|")?([a-zA-Z-0-9-_]+)('|")?/i;

exports.matchCharset = function (str) {
  var match = str.match(exports.charset);

  return match ? match[2] : null;
}

exports.utf8 = /utf-?8/i;

exports.extension = /\.([0-9a-z]+)$/i;

exports.matchExtension = function (str) {
  var match = str.match(exports.extension);

  return match ? match[1] : null;
}
