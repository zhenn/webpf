/* Log level */
/*
  0 EMERGENCY system is unusable
  1 ALERT action must be taken immediately
  2 CRITICAL the system is in critical condition
  3 ERROR error condition
  4 WARNING warning condition
  5 NOTICE a normal but significant condition
  6 INFO a purely informational message
  7 DEBUG messages to debug an application
*/

var fs = require('fs'),
    slice = Array.prototype.slice,
    dev,
    pro,
    level = {
      "0": "EMERGENCY",
      "1": "ALERT",
      "2": "CRITICAL",
      "3": "ERROR",
      "4": "WARNING",
      "5": "NOTICE",
      "6": "INFO",
      "7": "DEBUG"
    };

function readFileJSON(path) {
  var json = fs.readFileSync(path, {encoding: 'utf8'});
  return JSON.parse(json);
}


function defaultConfig() {
  return {
    "output": {
      "EMERGENCY": false,
      "ALERT": false,
      "CRITICAL": false,
      "ERROR": false,
      "WARNING": true,
      "NOTICE": true,
      "INFO": true,
      "DEBUG": false 
    },
    "throw": false
  }
}

try { dev = readFileJSON(process.env.PWD + '/dev.json') } catch (e) {}
try { pro = readFileJSON(process.env.PWD + '/pro.json'); } catch (e) {}

config = dev || pro || defaultConfig();

function debug() {
  var args = slice.call(arguments)
  args.unshift('[Debug]');
  console.log.apply(console, args);
}

function info() {
  var args = slice.call(arguments)
  args.unshift('[Info]');
  console.info.apply(console, args)
}

function notice() {
  var args = slice.call(arguments)
  args.unshift('[Notice]');
  console.log.apply(console, args);

}

function warn() {
  var args = slice.call(arguments)
  args.unshift('[Warn]');
  console.warn.apply(console, args);
}

function error(err) {
  if (config["throw"]) {
    /* remove first line trace which is from here */
    err.stack = err.stack.replace(/\n\s*at\s*\S*/, '');
    throw err;
  } else {
    var args = ['[Error]'];
    err.name && (err.name += ':') && (args.push(err.name));
    args.push(err.message);
    console.log.apply(console, args);
  }
  return false;
}


exports.debug = function(froms) {
  froms = slice.call(arguments).map(function(from) {
    return '[' + from + ']';
  });

  function exDebug() {
    if (!config.output['DEBUG']) return;
    return debug.apply({}, froms.concat(slice.call(arguments)));
  }

  exDebug.off = function() {
    return function() {}
  }

  return exDebug;
}

exports.info = function(froms) {
  froms = slice.call(arguments).map(function(from) {
    return '[' + from + ']';
  });

  function exInfo() {
    if (!config.output['INFO']) return;
    return info.apply({}, froms.concat(slice.call(arguments)));
  }

  exInfo.off = function() {
    return function() {}
  }

  return exInfo;
}

exports.notice = function(froms) {
  froms = slice.call(arguments).map(function(from) {
    return '[' + from + ']';
  });

  function exNotice() {
    if (!config.output['NOTICE']) return;
    return notice.apply({}, froms.concat(slice.call(arguments)));
  }

  exNotice.off = function() {
    return function() {}
  }

  return exNotice;
}

exports.warn = function(froms) {
  froms = slice.call(arguments).map(function(from) {
    return '[' + from + ']';
  });

  function exWarn() {
    if (!config.output['WARNING']) return;
    return warn.apply({}, froms.concat(slice.call(arguments)));
  }

  exWarn.off = function() {
    return function() {}
  }

  return exWarn;
}

exports.error = function(froms) {
  froms = slice.call(arguments).map(function(from) {
    return '[' + from + ']';
  });

  function exError() {
    var err;
    if (!config.output['ERROR']) return false;
    err = new Error(slice.call(arguments).join(' '));
    err.name = froms.join(' ');
    return error(err);
  }

  exError.off = function() {
    return function() {}
  }

  return exError;
}
