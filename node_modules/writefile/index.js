
var lift = require('lift-result/cps')
var dirname = require('path').dirname
var write = require('fs').writeFile
var mkdirp = require('mkdirp')

/**
 * fs.writeFile but makes parent directories if required
 *
 * @param {String} path
 * @param {String} text
 * @param {Function} cb
 */

module.exports = lift(function(path, text, cb){
  write(path, text, function(e){
    if (!e) return cb(null)
    if (e.code == 'ENOENT') {
      return mkdirp(dirname(path), 0777, function(e){
        if (e) cb(e)
        else write(path, text, cb)
      })
    }
    cb(e)
  })
})
