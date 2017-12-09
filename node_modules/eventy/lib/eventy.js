var debug = require('dever').debug('Eventy'),
    error = require('dever').error('Eventy'),
    warn = require('dever').warn('Eventy'),
    slice = Array.prototype.slice;

module.exports = function Eventy(object) {
  var registry = {};

  var constructor = function () {
    return this;
  }.call(object || {});

  /**
   * Remove the first matched callback from callbacks array
   */
  function removeCallback(callback, callbacks) {
    for (var i = 0; i < callbacks.length; i++) {
      if (callbacks[i] === callback) {
        return callbacks.splice(i, 1);
      }
    }

    return false;
  }

  /**
   * Listen to an event with a callback
   * @param  {String eventname}
   * @param  {Function callback}
   * @return {Object constructor || Boolean false}
   */
  constructor.on = function (eventname, callback) {
    if (typeof callback !== 'function') {
      error('callback is not a function');
      return false;
    }

    if (typeof registry[eventname] === 'undefined') {
      registry[eventname] = [];
    }

    registry[eventname].push(callback);
    return this;
  }

  /**
   * Remove one callback from the event callback list
   * @param  {String eventname}
   * @param  {Function callback}
   * @return {Object constructor || Boolean false}
   */
  constructor.off = function (eventname, callback) {
    if (typeof callback !== 'function') {
      error('callback is not a function');
      return false;
    }

    if (typeof registry[eventname] === 'undefined') {
      error('unregistered event');
      return false;
    }

    var callbacks = registry[eventname];

    if (callbacks.length === 0) {
      return this;
    }

    removeCallback(callback, callbacks);
    return this;
  }

  /**
   * Loop through all callbacks of the event and call them asynchronously
   * @param  {String eventname}
   * @param  {Arguments args}
   * @return {Object constructor}
   */
  constructor.trigger = function (eventname, args) {
    args = slice.call(arguments);
    eventname = args.shift();

    if (typeof registry[eventname] === 'undefined') {
      return this;
    }

    var callbacks = registry[eventname];

    if (callbacks.length === 0) {
      return this;
    }

    callbacks.forEach(function (callback, index) {
      setTimeout(function () {
        callback.apply(constructor, args);
      }, 0);
    });

    return this;
  }

  /**
   * Alias of trigger
   */
  constructor.emit = constructor.trigger;

  /**
   * Loop through all callbacks of the event and call them synchronously
   * @param  {String eventname}
   * @param  {Arguments args}
   * @return {Object constructor}
   */
  constructor.triggerSync = function (eventname, args) {
    args = slice.call(arguments);
    eventname = args.shift();

    if (typeof registry[eventname] === 'undefined') {
      return this;
    }

    var callbacks = registry[eventname];

    if (callbacks.length === 0) {
      return this;
    }

    callbacks.forEach(function (callback, index) {
      callback.apply(constructor, args);
    });

    return this;
  }

  return constructor;
}
