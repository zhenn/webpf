### Concept
var debug = require('logger').debug('/api/users')
var error = require('logger').error('/api/users')
var warn = require('logger').warn('/api/users')
var info = require('logger').info('/api/users')
var notice = require('logger').notice('/api/users')

var devConfig = {
  "level": {
    "0": "EMERGENCY",
    "1": "ALERT",
    "2": "CRITICAL",
    "3": "ERROR",
    "4": "WARNING",
    "5": "NOTICE",
    "6": "INFO",
    "7": "DEBUG"
  },
  "output": {
    "EMERGENCY": true,
    "ALERT": true,
    "CRITICAL": true,
    "ERROR": true,
    "WARNING": true,
    "NOTICE": true,
    "INFO": true,
    "DEBUG": true 
  },
  "throw": true
}
###

fs = require('fs')
dever = require('../util/dever')
debug = dever.debug('dever.test')
info = dever.info('dever.test')
notice = dever.notice('dever.test')
warn = dever.warn('dever.test')
error = dever.error('dever.test')


describe 'dever.debug()', ->
  it 'should be a function', ->
    dever.debug.should.be.a 'function'

describe 'dever.info()', ->
  it 'should be a function', ->
    dever.info.should.be.a 'function'

describe 'dever.notice()', ->
  it 'should be a function', ->
    dever.notice.should.be.a 'function'

describe 'dever.warn()', ->
  it 'should be a function', ->
    dever.warn.should.be.a 'function'

describe 'dever.error()', ->
  it 'should be a function', ->
    dever.error.should.be.a 'function'

  it 'should throw error when dev config says throw', ->
    devConfig = {"throw": true}
    # fs.writeFileSync './dev.json', JSON.stringify devConfig
    # fs.unlinkSync './dev.json'
    # error.should.throw()

  it 'should not throw error when pro config says no throw', ->
    proConfig = {"throw": false}
