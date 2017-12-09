
var write = require('fs').createWriteStream
var dirname = require('path').dirname
var lift = require('lift-result/cps')
var mkdirp = require('mkdirp')

/**
 * fs.createWriteStream but makes parent directories if required
 *
 * @param {String} path
 * @param {Stream} stream
 * @param {Object} [options]
 */

module.exports = lift(function(path, stream, options, cb){
  if (typeof options != 'object') cb = options, options = null
  mkdirp(dirname(path), 0777, function(e){
    if (e) return cb(e)
    stream.pipe(write(path, options))
      .on('error', cb)
      .on('finish', cb)
  })
})
